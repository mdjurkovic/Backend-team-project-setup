import {Country} from "../../../db/models";

const countryQueries = {
    countries: async (_, args, {loaders}) => {
        const countries = await Country.find();

        return loaders.country.many(countries.map(({id}) => id));
    },
    country: async (_, {id}, {loaders}) => await loaders.country.one(id)
};

export default countryQueries;
