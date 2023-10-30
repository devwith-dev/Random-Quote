import axios from "axios";
import React, { useState } from "react";
import "./AddQuote.css";

const AddQuote = () => {
  const [data, setData] = useState({
    quote: "",
    author: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:9000/api/v1/quote/new-quote",
      data
    );
    window.location.href = "/";
  };
  return (
    <main>
      <h1>Add a New Quote</h1>
      <div className="add-quote">
        <form className="add-form" onSubmit={handleSubmit}>
          <label htmlFor="quote">Enter Quote</label>
          <textarea
            value={data.quote}
            onChange={handleChange}
            rows="6"
            cols="50"
            name="quote"
            required
            maxLength="350"
            autoComplete="off"
            placeholder="Word Limit - 350 characters."
          />
          <label htmlFor="author">Enter Author</label>
          <input
            value={data.author}
            onChange={handleChange}
            type="text"
            name="author"
            required
            autoComplete="off"
            placeholder="Enter Author Name"
          />
          <button className="addbtn" type="submit">
            Add Quote
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddQuote;
