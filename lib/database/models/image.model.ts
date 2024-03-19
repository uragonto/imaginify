import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // Since URL is not directly supported in TypeScript
  width?: number; // Nullable number for width
  height?: number; // Nullable number for height
  config?: object; // Object type for config
  transformationUrl?: string; // Nullable string for transformationUrl
  aspectRatio?: string; // Nullable string for aspectRatio
  color?: string; // Nullable string for color
  prompt?: string; // Nullable string for prompt
  author: {
    _id: string;
    firstName: string;
    lastNmae: string;
  };
  createdAt?: Date; // Date type for createdAt
  updatedAt?: Date; // Date type for updatedAt
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
