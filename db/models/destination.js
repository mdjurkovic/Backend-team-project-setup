import {model, Schema} from "mongoose";

const DestinationSchema = new Schema(
    {
        name: {type: String, required: true},
        country: {type: Schema.Types.ObjectId, ref: "Country", required: true},
    },
    {
        timestamps: true,
    }
);

export default model("Destination", DestinationSchema);
