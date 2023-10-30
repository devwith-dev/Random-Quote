const express = require("express");
const cors = require("cors");
const quoteRoute = require("./Routes/quoteRoute");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;
const app = express();

//connect database
require("./Config/dbConnect");

//middlewares
app.use(express.json());
app.use(cors());

//quote route
app.use("/api/v1/quote",quoteRoute);

//listen to server
app.listen(PORT, () => {
  console.log(`Server Up and Running at Port ${PORT}`);
});
