import productModel from "../models/productModel.js";

// Add Product
const addProduct = async (req, res) => {
  const body = req.body;
  const result = await productModel.create(body);
  res.json(result);
};

// Show All Products
const getProducts = async (req, res) => {
  const result = await productModel.find();
  res.json(result);
};

// Get Single Product
const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productModel.findById(id);
  res.json(result);
};

// Update Product
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await productModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  res.json(result);
};

// Delete Product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productModel.findByIdAndDelete(id);
  res.json(result);
};

export {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};