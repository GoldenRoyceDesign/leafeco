const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/productModel");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { dbName: "ecommerce" })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const products = [
  {
    name: "iPhone 13",
    price: 799,
    image: "http://localhost:5000/uploads/product.png",
    description: "Latest iPhone with A15 Bionic chip.",
    category: "Mobile",
    stock: 50,
  },
  {
    name: "Samsung Galaxy S21",
    price: 699,
    image: "http://localhost:5000/uploads/product.png",
    description: "Powerful Android phone with Snapdragon 888.",
    category: "Mobile",
    stock: 30,
  },
];

// Insert products into MongoDB
const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Products Inserted!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
