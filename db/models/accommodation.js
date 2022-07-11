import { Schema, model } from "mongoose";

const AccommodationSchema = new Schema(
  {
    name: { type: String, required: true },
    star_number: { type: String },
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Accommodation", AccommodationSchema);
