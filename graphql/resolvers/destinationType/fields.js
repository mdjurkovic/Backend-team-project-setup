import {DestinationBelongsType} from "../../../db/models";

const destinationTypeFields = {
    DestinationType: {
        destinations: async (destinationType, _, {loaders}) => {
            const destinationBelongsTypes = await DestinationBelongsType.find({
                destinationType: destinationType.id,
            });

            return loaders.destination.many(destinationBelongsTypes.map(({destination}) => destination))
        },
    },
};

export default destinationTypeFields;
