import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import VideoCall from "./components/VideoCall";
import Room from "./components/Room";
import Pagenation from "./components/Pagenation";
import Login from "./components/Login";
import Validation from "./components/Validation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/videocall" element={<VideoCall />} />
      <Route path="/room" element={<Room />} />
      <Route path="/pagenation" element={< Pagenation/>}/>
      <Route path ='/login' element ={<Login/>} />
      <Route path ='/validation' element ={<Validation/>} />
    </Routes>
  );
};

export default App;
