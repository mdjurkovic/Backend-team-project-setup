import {Country} from "../../../db/models";

const countryMutations = {
    createCountry: async (_, {country}, {loaders}) => {
        const newCountry = new Country(country);

        const savedCountry = await newCountry.save();

        return loaders.country.one(savedCountry._id);
    },
    updateCountry: async (_, {id, country}, {loaders}) => {
        await Country.findByIdAndUpdate(
            id,
            {
                $set: {...country},
            },
            {new: true}
        );

        return loaders.country.one(id);
    },
};

export default countryMutations;
