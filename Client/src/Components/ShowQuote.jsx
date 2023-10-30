import React, { useEffect, useState } from "react";
import "./ShowQuote.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { TbReload } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const ShowQuote = () => {
  const [data, setData] = useState({
    quote: "",
    author: "",
    quoteID: "",
  });

  const getRandomQuote = async () => {
    const response = await axios.get(
      "http://localhost:9000/api/v1/quote/random-quote"
    );
    console.log(response);
    const { quote, author, _id } = response.data;
    setData({
      quote,
      author,
      quoteID: _id,
    });
  };

  const deleteQuote = async () => {
    const response = await axios.delete(
      `http://localhost:9000/api/v1/quote/delete-quote/${data.quoteID}`
    );
    console.log(response);
    alert("Quote Deleted");
    getRandomQuote();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <main>
      <h1>Random Quote Generator</h1>
      <div className="container">
        <div className="quote-container">
          <div className="quote-box">
            <p>" {data.quote} "</p>
          </div>
          <div className="author-box">
            <p>Author : {data.author}</p>
          </div>
        </div>
        <div className="button-bar">
          <div className="left">
            <div className="buttons">
              <Link to={`/edit-quote/${data.quoteID}`}>
                <FiEdit />
              </Link>
            </div>
            <div className="buttons" onClick={deleteQuote}>
              <MdDeleteOutline />
            </div>
          </div>
          <div className="buttons" onClick={getRandomQuote}>
            <TbReload />
          </div>
        </div>
      </div>
      <Link to="/new-quote" className="addbtn">
        + New Quote
      </Link>
    </main>
  );
};

export default ShowQuote;
