import {Country, DestinationBelongsType, Excursion, Tour} from "../../../db/models";

const destinationFields = {
    Destination: {
        destinationTypes: async (destination, _, {loaders}) => {
            const destinationBelongsTypes = await DestinationBelongsType.find({
                destination: destination.id,
            });

            return loaders.destinationType.many(destinationBelongsTypes.map(({destinationType}) => destinationType))
        },
        tours: async (destination, _, {loaders}) => {
            const tours = await Tour.find({destination: destination.id});
            console.log(tours)

            return loaders.tour.many(tours.map(({id}) => id));
        },
        excursions: async (destination, _, {loaders}) => {
            const excursions = await Excursion.find({destination: destination.id});

            return loaders.excursion.many(excursions.map(({id}) => id));
        },
        country: async (destination, _, {loaders}) => {
            const country = await Country.findById(destination.country);

            return loaders.country.one(country.id);
        },
    },
};

export default destinationFields;
