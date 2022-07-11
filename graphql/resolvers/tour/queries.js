import {Tour} from "../../../db/models";

const tourQueries = {
    tours: async (_, args, {loaders}) => {
        const tours = await Tour.find();

        return loaders.tour.many(tours.map(({id}) => id))
    },
    tour: async (_, {id}, {loaders}) => await loaders.tour.one(id),
};

export default tourQueries;
