import {Excursion} from "../../../db/models";

const excursionQueries = {
    excursions: async (_, args, {loaders}) => {
        const excursions = await Excursion.find();

        return loaders.excursion.many(excursions.map(({id}) => id));
    },
    excursion: async (_, {id}, {loaders}) => await loaders.excursion.one(id),
};

export default excursionQueries;
