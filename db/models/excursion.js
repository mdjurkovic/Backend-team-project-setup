import { Schema, model } from "mongoose";

const ExcursionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String },
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

export default model("Excursion", ExcursionSchema);
