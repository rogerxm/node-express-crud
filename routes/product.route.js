const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
