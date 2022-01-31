import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
// import Card from './components/Apicard/Apicard';
import Marketplace from './pages/Marketplace/Marketplace';
import Signup from './pages/DashboardSignup/Signup';
// import Homepage from './pages/Homepage/Homepage';
import Header from "./components/Header/Header"


const App = () =>{
    return(
       <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element = {<Marketplace/>}/>
                <Route exact path="/signup" element = {<Signup/>}/>
            </Routes>
       </Router>
    )
}

export default App;