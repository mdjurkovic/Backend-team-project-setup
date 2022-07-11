import {Guider} from "../../../db/models";

const guiderQueries = {
    guiders: async (_, args, {loaders}) => {
        const guiders = await Guider.find();

        return loaders.guider.many(guiders.map(({id}) => id));
    },
    guider: async (_, {id}, {loaders}) => await loaders.guider.one(id),
};

export default guiderQueries;
