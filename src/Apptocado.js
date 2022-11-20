import Home from './componentes/home/home';
import Navbar from './componentes/navbar/navbar';
import Footer from './componentes/footer/footer';
import Contacto from './componentes/contacto/contacto';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Form } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/contacto" element={Contacto}>     
          <Contacto />
          </Route>

      </Switch>

      <Footer />
    </BrowserRouter>

 
  );
  }

  export default App;