import {Departure} from "../../../db/models";

const departureMutations = {
    createDeparture: async (_, {departure}, {loaders}) => {
        const newDeparture = new Departure(departure);

        const savedDeparture = await newDeparture.save();

        return loaders.departure.one(savedDeparture.id)
    },
    updateDeparture: async (_, {id, departure}, {loaders}) => {
        await Departure.findByIdAndUpdate(
            id,
            {
                $set: {...departure},
            },
            {new: true}
        );

        return loaders.departure.one(id)
    },
};

export default departureMutations;
