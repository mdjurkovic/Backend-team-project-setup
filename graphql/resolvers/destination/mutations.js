import {Destination, DestinationBelongsType} from "../../../db/models";

const destinationMutations = {
    createDestination: async (_, {destination}, {loaders}) => {
        const newDestination = new Destination(destination);

        const savedDestination = await newDestination.save();

        return loaders.destination.one(savedDestination._id)
    },
    updateDestination: async (_, {id, destination}, {loaders}) => {
        await Destination.findByIdAndUpdate(
            id,
            {
                $set: {...destination},
            },
            {new: true}
        );

        return loaders.destination.one(id)
    },
    addDestinationTypeToDestination: async (_, {id, destinationType}, {loaders}) => {
        const destination = await Destination.findById(id);

        if (destination) {
            const destinationBelongsType = new DestinationBelongsType({
                destinationType,
                destination: id,
            });
            await destinationBelongsType.save();
        }

        return loaders.destination.one(id);
    },
};

export default destinationMutations;
