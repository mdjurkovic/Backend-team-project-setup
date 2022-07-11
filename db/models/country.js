import { Schema, model } from "mongoose";

const CountrySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Country", CountrySchema);
