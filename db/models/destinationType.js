import { Schema, model } from "mongoose";

const DestinationTypeSchema = new Schema(
  {
    label: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("DestinationType", DestinationTypeSchema);
