import {connection} from "mongoose";
import connectDB from "../";
import {
    Country,
    Departure,
    Destination,
    DestinationBelongsType,
    DestinationType,
    Excursion,
    Guider,
    GuidesAt,
    Tour,
} from "../models";

const seed = async () => {
    console.log("Cleaning database");

    await connectDB();
    await connection.dropDatabase();

    console.log("Database clean");

    const countries = [
        new Country({name: "Tanzania"}),
        new Country({name: "Turkey"}),
        new Country({name: "Pakistan"}),
        new Country({name: "India"}),
    ];

    const destinationTypes = [
        new DestinationType({label: "Adventure"}),
        new DestinationType({label: "Summer vacation"}),
        new DestinationType({label: "New year"}),
    ];

    const destinations = [
        new Destination({name: "Zanzibar", country: countries[0]}),
        new Destination({name: "Cappadocia", country: countries[1]}),
        new Destination({name: "Antalya", country: countries[1]}),
        new Destination({name: "Pakistan", country: countries[2]}),
    ];

    const destinationBelongsTypes = [
        new DestinationBelongsType({
            destination: destinations[0]._id,
            destinationType: destinationTypes[1]._id,
        }),
        new DestinationBelongsType({
            destination: destinations[0]._id,
            destinationType: destinationTypes[2]._id,
        }),
        new DestinationBelongsType({
            destination: destinations[1]._id,
            destinationType: destinationTypes[0]._id,
        }),
        new DestinationBelongsType({
            destination: destinations[2]._id,
            destinationType: destinationTypes[1]._id,
        }),
        new DestinationBelongsType({
            destination: destinations[3]._id,
            destinationType: destinationTypes[0]._id,
        }),
    ];

    const excursions = [
        new Excursion({
            name: "Stone town, Prison Island, Nakupenda",
            description:
                "Pre podne krećemo na fakultativni izlet – obilazak Stoun Tauna i istraživanje najzanimljivijih atrakcija – kuća u kojoj je živeo Fredi Merkjuri (Freddie Mercury), male i živahne ulice i trgovi, Stara tvrđava, Palata čuda, muzeji, lokalna pijaca, zvuci, boje i mirisi Afrike! Ime Stoun Taun na svahiliju znači „Stari grad”. Grad se nalazi na UNESCO-voj listi Svetske baštine od 2000. godine. Zatim idemo do Prizn Ajlenda (Prison Island) iliti Ostrva zatvor, koji se nalazi severno od Stoun Tauna, a dobio je ime po mestu gde su se nekada držali zarobljenici i robovi. Danas je to mirno mesto gde ćemo uživati u kupanju i druženju sa džinovskim kornjačama koje su prenete na ovo mesto u 19. veku sa Sejšela. Neke od kornjača stare su preko 100 godina, a mi ćemo imati prilike da ih hranimo i mazimo. Dan završavamo posetom Nakupenda plaži, koja zapravo predstavlja peščani sprud u sred okeana. Uživamo na vrućem pesku i plivamo u tirkiznoj vodi tanzanijske obale. Povratak u smeštaj.",
            price: "50 USD",
            destination: destinations[0],
        }),
        new Excursion({
            name: "Blue safari",
            description: "desc",
            price: "60 USD",
            destination: destinations[0],
        }),
        new Excursion({
            name: "Kendwa plaža i Nungwi Mnarani Aquarium",
            description: "desc",
            price: "40 USD",
            destination: destinations[0],
        }),
        new Excursion({
            name: "Let balonom",
            description: "desc",
            price: "140 do 170 EUR",
            destination: destinations[1],
        }),
        new Excursion({
            name: "Jahanje konja",
            description: "desc",
            price: "30 EUR",
            destination: destinations[1],
        }),
        new Excursion({
            name: "Tradicionalno tursko veče",
            description: "desc",
            price: "25 EUR",
            destination: destinations[1],
        }),
        new Excursion({
            name: "Green tour",
            description: "desc",
            price: "40 EUR",
            destination: destinations[1],
        }),
    ];

    const guiders = [
        new Guider({name: "Vodic 1"}),
        new Guider({name: "Vodic 2"}),
        new Guider({name: "Vodic 3"}),
    ];

    const tours = [
        new Tour({
            name: "Zanzibar akcija",
            destination: destinations[0]._id,
            guider: guiders[0]._id,
        }),
        new Tour({
            name: "Zanzibar akcija nova godina",
            destination: destinations[0]._id,
            guider: guiders[1]._id,
        }),
        new Tour({
            name: "Kapadokija avio",
            destination: destinations[1]._id,
            guider: guiders[0]._id,
        }),
    ];

    const departures = [
        new Departure({
            departure_date: new Date("2022-09-12"),
            return_date: new Date("2022-09-25"),
            guider: guiders[0]._id,
            tour: tours[0]._id
        })
    ]

    const guidesAts = [
        new GuidesAt({
            guider: guiders[0]._id,
            tour: tours[0]._id
        }),
        new GuidesAt({
            guider: guiders[0]._id,
            tour: tours[1]._id
        }),
        new GuidesAt({
            guider: guiders[1]._id,
            tour: tours[1]._id
        })
    ]

    const savings = [
        ...countries.map((country) => country.save()),
        ...destinations.map((destination) => destination.save()),
        ...destinationTypes.map((dt) => dt.save()),
        ...destinationBelongsTypes.map((dto) => dto.save()),
        ...excursions.map((excursion) => excursion.save()),
        ...guiders.map((guider) => guider.save()),
        ...tours.map((tour) => tour.save()),
        ...departures.map((departure) => departure.save()),
        ...guidesAts.map((guidesAt) => guidesAt.save())
    ];

    await Promise.all(savings);

    console.log("Database seeded");

    connection.close();
};

seed();
