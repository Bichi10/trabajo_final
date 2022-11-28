import React, { useEffect, useRef, useState } from 'react';
import "./App.css";
import bootstrapcarousel from "./componentes/carousel/bootstrapcarousel";
import Navbar from './componentes/navbar/Navbar';
import Home from "./componentes/home/home";
import Menu from './componentes/navbar/Navbar';
import Contacto from "./componentes/contacto/Contacto";
import Footer from './componentes/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Nav from 'react-bootstrap';
import Argentina from './componentes/equipos/Argentina';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/Argentina" element={<Argentina />} />

        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;