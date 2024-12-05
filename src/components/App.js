
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />}/>
            <Route path="/item/:id" element={<Item />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

function List(){
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        <li><Link to={"/item/1"}>Item 1</Link></li>
        <li><Link to={"/item/2"}>Item 2</Link></li>
        <li><Link to={"/item/3"}>Item 3</Link></li>
      </ul>
    </div>
  )
}

function Item(){
  const {id} =  useParams()
  return (
    <div>
      <h1>Item {id}</h1>
      <p>Description for item {id}</p>
    </div>
  )
}