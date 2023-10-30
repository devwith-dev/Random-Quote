const Quote = require("../Models/quoteModel");

const createQuoteController = async (req, res) => {
  //get quote from request body
  const { quote, author } = req.body;
  try {
    const newQuote = await Quote.create({
      quote,
      author,
    });
    res.status(200).json({
      status: "Success",
      data: newQuote,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const fetchRandomQuoteCtrl = async (req, res) => {
  try {
    const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }]);
    console.log(randomQuote);
    res.status(200).json(randomQuote[0]);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const fetchQuoteController = async (req, res) => {
  const { id } = req.params;
  try {
    const fetchedQuote = await Quote.findById(id);
    res.status(200).json(fetchedQuote);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const updateQuoteController = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      data: updatedQuote,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
const deleteQuoteController = async (req, res) => {
  const { id } = req.params;
  try {
    await Quote.findByIdAndDelete(id);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

module.exports = {
  createQuoteController,
  updateQuoteController,
  deleteQuoteController,
  fetchRandomQuoteCtrl,
  fetchQuoteController,
};
