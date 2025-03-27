const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the "public" folder
app.use("/uploads", express.static(path.join(__dirname, "public/images")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { dbName: "ecommerce" })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
