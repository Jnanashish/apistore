import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
// import Card from './components/Apicard/Apicard';
import Marketplace from './pages/Marketplace/Marketplace';
import Signupdash from './pages/DashboardSignup/Signupdash';
// import Homepage from './pages/Homepage/Homepage';
import Header from "./components/Header/Header"
import Signindash from './pages/SigninDashboard/Signindash';
import Addapi from './components/AddApi/Addapi';
// import Apidesc from './components/Apidesc/Apidesc';


const App = () =>{
    return(
       <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element = {<Marketplace/>}/>
                <Route exact path="/signin" element = {<Signindash/>}/>
                <Route exact path="/signup" element = {<Signupdash/>}/>
                <Route exact path="/newapi" element = {<Addapi/>}/>
            </Routes>
       </Router>
    )
}

export default App;