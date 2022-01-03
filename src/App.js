import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import "./App.css";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Education from './pages/Education/Education';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";



const override = css`
  display: block;
  margin-top: 40vh;
 margin-left:auto;
 margin-right:auto;
  justify-content: center;
  alingment-items: center;
  border-color: red;

`;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  
  return (
  <div className="Souravsite" >
{
loading ?
<BounceLoader color={"#0a2b46"} loading={loading} css={override} size={150} />
:
<Router> 
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/education" exact>
          <Education/>
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio/>
        </Route>
        <Route path="/services" exact>
          <Services/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
   </Router>
}


  </div>
  
  
  );
}

export default App;
