import {Destination} from "../../../db/models";

const destinationQueries = {
    destinations: async (_, args, {loaders}) => {
        const destinations = await Destination.find();

        return loaders.destination.many(destinations.map(({id}) => id));
    },
    destination: async (_, {id}, {loaders}) => loaders.destination.one(id)
};

export default destinationQueries;
