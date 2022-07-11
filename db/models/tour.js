import {model, Schema} from "mongoose";

const TourSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        route: {type: String},
        transfer: {type: String},
        stay_time: {type: Number},
        guider: {type: Schema.Types.ObjectId, ref: "Guider", required: true}, //remove either here or in departure
        destination: {
            type: Schema.Types.ObjectId,
            ref: "Destination",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model("Tour", TourSchema);
