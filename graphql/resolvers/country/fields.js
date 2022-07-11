import {Destination} from "../../../db/models";

const countryFields = {
    Country: {
        destinations: async (country, _, {loaders}) => {
            const destinations = await Destination.find({country: country.id});

            return loaders.destination.many(destinations.map(({id}) => id));
        },
    },
};

export default countryFields;
