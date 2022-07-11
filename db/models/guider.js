import { Schema, model } from "mongoose";

const GuiderSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Guider", GuiderSchema);
