import React, {useEffect, useRef, useState}from 'react';
import "./App.css";
import Bootstrapcarousel from "./componentes/carousel/bootstrapcarousel";
import Navbar from './componentes/navbar/Navbar';
import Home from "./componentes/home/home";
import Menu from './componentes/navbar/Navbar';
import Contacto from "./componentes/contacto/Contacto";
import Footer from './componentes/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import grupos from './componentes/grupos/grupo';
import  Nav  from 'react-bootstrap';


function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/contacto">     
          <Contacto />
          </Route>
          <Route exact path="/grupos">
            <grupo />
            </Route>  
                </Switch>
      
    </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;