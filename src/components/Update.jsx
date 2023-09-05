import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const click = async (e) =>{
    e.preventDefault()
    try {
       await axios.put("http://localhost:8800/books/"+bookId, book) 
       navigate("/")
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="form" onChange={handleChange}>
      <h1>Update The Book</h1>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="desc" name="desc" />
      <input type="number" placeholder="price" name="price" />
      <input type="text" placeholder="cover" name="cover" />
      <button className="formButton" onClick={click}>Update</button>
    </div>
  );
};

export default Update;
