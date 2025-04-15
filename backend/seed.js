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
    name: "10 Inch Round Compostable Plates",
    price: 799,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Table ware",
    stock: 50,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 699,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Kitchen Ware",
    stock: 30,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 799,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Kitchen Ware",
    stock: 50,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 699,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Table ware",
    stock: 30,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 799,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Kitchen Ware",
    stock: 50,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 699,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Drink Ware",
    stock: 30,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 799,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Drink Ware",
    stock: 50,
  },
  {
    name: "10 Inch Round Compostable Plates",
    price: 699,
    image: "https://leafeco.onrender.com/uploads/product.png",
    description: "Lorem ipsum is placeholder text commonly in the graphic, print, and publishing",
    category: "Drink Ware",
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
