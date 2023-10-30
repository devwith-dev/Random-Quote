import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateQuote = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    quote: "",
    author: "",
  });

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get(
        `https://random-quote-tawny.vercel.app/api/v1/quote/fetch-quote/${id}`
      );
      const { quote, author } = response.data;
      setData({
        quote,
        author,
      });
    };
    fetchQuote();
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `https://random-quote-tawny.vercel.app/api/v1/quote/edit-quote/${id}`,
      data
    );
    window.location.href = "/";
  };
  return (
    <main>
      <h1>Update Quote</h1>
      <div className="container add-quote">
        <form className="add-form" onSubmit={handleSubmit}>
          <label htmlFor="quote">Enter Quote</label>
          <textarea
            value={data.quote}
            onChange={handleChange}
            rows="6"
            cols="50"
            name="quote"
            required
            autoComplete="off"
          />
          <label htmlFor="author">Enter Author</label>
          <input
            value={data.author}
            onChange={handleChange}
            type="text"
            name="author"
            required
            autoComplete="off"
          />
          <button className="addbtn" type="submit">
            Update Quote
          </button>
        </form>
      </div>
    </main>
  );
};

export default UpdateQuote;
