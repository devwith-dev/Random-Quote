const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });

//connect

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
