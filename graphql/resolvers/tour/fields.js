import {Destination, Guider} from "../../../db/models";

const tourFields = {
    Tour: {
        destination: async (tour, _, {loaders}) => {
            const destination = await Destination.findById(tour.destination);

            return loaders.destination.one(destination.id);
        },
        guider: async (tour, _, {loaders}) => {
            const guider = await Guider.findById(tour.guider);

            return loaders.guider.one(guider.id);
        },
    },
};

export default tourFields;
