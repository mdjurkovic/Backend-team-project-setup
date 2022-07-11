import {model, Schema} from "mongoose";

const GuidesAtSchema = new Schema(
    {
        guider: {type: Schema.Types.ObjectId, ref: "Guider", required: true},
        tour: {
            type: Schema.Types.ObjectId,
            ref: "Tour",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model("GuidesAt", GuidesAtSchema);
