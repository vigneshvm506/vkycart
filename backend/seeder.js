const products = require("./data/products.json"); // Corrected path to products.json
const Product = require("./models/productModel"); // Corrected path to productModel
const dotenv = require("dotenv");
const connectDatabase = require("./config/database"); // Corrected path to database configuration

// Load environment variables
dotenv.config({ path: "./config/config.env" }); // Corrected path to config.env

// Connect to the database
connectDatabase();

const seedProducts = async () => {
  try {
    // Delete all products from the database
    await Product.deleteMany();
    console.log("Products deleted!");

    // Insert products from products.json
    await Product.insertMany(products);
    console.log("All products added!");

    // Exit the process
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1); // Exit with failure
  }
};

seedProducts();
