import { Schema, model } from "mongoose";

const DestinationBelongsTypeSchema = new Schema(
  {
    destination: {
      type: Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    destinationType: {
      type: Schema.Types.ObjectId,
      ref: "DestinationType",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("DestinationBelongsType", DestinationBelongsTypeSchema);
