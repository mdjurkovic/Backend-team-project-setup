import DataLoader from "dataloader";
import {Country, Departure, Destination, DestinationType, Excursion, Guider, Tour} from "../db/models";

const createLoader = (Model) => {
    const loader = new DataLoader(async (keys) => {
        const data = await Model.find({_id: {$in: keys}});

        // DataLoaders depends on the order of the input to return the result
        // So, it is needed to map results in order to create a correct output
        const dataMap = data.reduce((acc, curr) => {
            acc[curr._id] = curr;
            return acc;
        }, {});

        return keys.map((id) => dataMap[id]);
    });

    return {
        one: async (id) => loader.load(id.toString()),
        many: async (ids) => loader.loadMany(ids.map((id) => id.toString())),
    };
};

const context = async () => {
    const loaders = {
        country: createLoader(Country),
        destination: createLoader(Destination),
        destinationType: createLoader(DestinationType),
        excursion: createLoader(Excursion),
        guider: createLoader(Guider),
        tour: createLoader(Tour),
        departure: createLoader(Departure)
    };

    return {loaders};
};

export default context;
