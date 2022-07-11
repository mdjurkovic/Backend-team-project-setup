import {model, Schema} from "mongoose";

const DepartureSchema = new Schema(
    {
        departure_date: {type: Date, required: true},
        return_date: {type: Date, required: true},
        guider: {type: Schema.Types.ObjectId, ref: "Guider", required: true}, //remove either here or in tour
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

export default model("Departure", DepartureSchema);
