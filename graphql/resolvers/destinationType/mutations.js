import {DestinationType} from "../../../db/models";

const destinationTypeMutations = {
  createDestinationType: async (_, {destinationType}, {loaders}) => {
    const newDestinationType = new DestinationType(destinationType);

    const savedDestinationType = await newDestinationType.save();

    return loaders.destinationType.one(savedDestinationType.id)
  },
  updateDestinationType: async (_, {id, destinationType}, {loaders}) => {
    await DestinationType.findByIdAndUpdate(
        id,
        {
          $set: {...destinationType},
        },
        {new: true}
    );

    return loaders.destinationType.one(id)
  },
};

export default destinationTypeMutations;
