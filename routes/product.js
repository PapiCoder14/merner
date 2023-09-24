import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  patchProduct,
  deleteProduct,
} from "../controller/product.js";

const productrouter = express.Router();

productrouter
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", patchProduct)
  .delete("/:id", deleteProduct);

export default productrouter;
