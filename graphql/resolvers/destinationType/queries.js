import {DestinationType} from "../../../db/models";

const destinationTypeQueries = {
    destinationTypes: async (_, args, {loaders}) => {
        const destinationTypes = await DestinationType.find();

        return loaders.destinationType.many(
            destinationTypes.map(({id}) => id)
        );
    },
    destinationType: async (_, {id}, {loaders}) =>
        await loaders.destinationType.one(id),
};

export default destinationTypeQueries;
