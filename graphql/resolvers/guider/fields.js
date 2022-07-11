import {GuidesAt} from "../../../db/models";

const guiderFields = {
    Guider: {
        tours: async (guider, _, {loaders}) => {
            const guidesAt = await GuidesAt.find({guider: guider.id});

            return loaders.tour.many(guidesAt.map(({tour}) => tour));
        },
    },
};

export default guiderFields;
