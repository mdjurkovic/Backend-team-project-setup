import {Excursion} from "../../../db/models";

const excursionMutations = {
    createExcursion: async (_, {excursion}, {loaders}) => {
        const newExcursion = new Excursion(excursion);

        const savedExcursion = await newExcursion.save();

        return loaders.excursion.one(savedExcursion.id)
    },
    updateExcursion: async (_, {id, excursion}, {loaders}) => {
        await Excursion.findByIdAndUpdate(
            id,
            {
                $set: {...excursion},
            },
            {new: true} //get the new version of record after update - default returns old value
        );

        return loaders.excursion.one(id)
    },
};

export default excursionMutations;
