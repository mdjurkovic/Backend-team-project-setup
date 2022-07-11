import {Guider} from "../../../db";

const guiderMutations = {
  createGuider: async (_, {guider}, {loaders}) => {
    const newGuider = new Guider(guider);

    const savedGuider = await newGuider.save();

    return loaders.guider.one(savedGuider.id)
  },
  updateGuider: async (_, {id, guider}, {loaders}) => {
    await Guider.findByIdAndUpdate(
        id,
        {
          $set: {...guider},
        },
        {new: true} //get the new version of record after update - default returns old value
    );

    return loaders.guider.one(id)
  },
};

export default guiderMutations;
