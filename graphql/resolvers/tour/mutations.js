import {Tour} from "../../../db";

const tourMutations = {
  createTour: async (_, {tour}, {loaders}) => {
    const newTour = new Tour(tour);

    const savedTour = await newTour.save();

    return loaders.tour.one(savedTour.id)
  },
  updateTour: async (_, {id, tour}, {loaders}) => {
    await Tour.findByIdAndUpdate(
        id,
        {
          $set: {...tour},
        },
        {new: true}
    );

    return loaders.tour.one(id)
  },
};

export default tourMutations;
