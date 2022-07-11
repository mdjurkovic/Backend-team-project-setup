import {Destination} from "../../../db/models";

const excursionFields = {
    Excursion: {
        destination: async (excursion, _, {loaders}) => {
            const destination = await Destination.findById(excursion.destination);

            return loaders.destination.one(destination.id);
        },
    },
};

export default excursionFields;
