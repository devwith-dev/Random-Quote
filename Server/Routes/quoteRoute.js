const express = require("express");
const { createQuoteController, fetchRandomQuoteCtrl, updateQuoteController, deleteQuoteController, fetchQuoteController } = require("../Controllers/quoteController");
const quoteRoute = express.Router();

//random quote route
quoteRoute.get("/random-quote", fetchRandomQuoteCtrl);

//fetch quote route
quoteRoute.get("/fetch-quote/:id", fetchQuoteController);

//create quote route
quoteRoute.post("/new-quote", createQuoteController);

//edit quote route
quoteRoute.put("/edit-quote/:id", updateQuoteController);

//delete quote route
quoteRoute.delete("/delete-quote/:id",deleteQuoteController);

module.exports = quoteRoute;