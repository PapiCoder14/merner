import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  id: { type: Number },
  title: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, required: true, min: [10, "Invaid Price"] },
  discountPercentage: Number,
  rating: { type: Number, default: 0 },
  stock: { type: Number },
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model("Product", productSchema);
export default Product;
