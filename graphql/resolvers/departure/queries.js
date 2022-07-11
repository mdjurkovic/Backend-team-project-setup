import {DestinationType} from "../../../db/models";

const departureQueries = {
    departures: async (_, args, {loaders}) => {
        const departure = await DestinationType.find();

        return loaders.departure.many(
            departure.map(({id}) => id)
        );
    },
    departure: async (_, {id}, {loaders}) =>
        await loaders.destinationType.one(id),
};

export default departureQueries;
