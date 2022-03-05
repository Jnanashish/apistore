import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import CSS
import './App.css';


// import component
import Marketplace from './pages/Marketplace/Marketplace';
import Signupdash from './pages/DashboardSignup/Signupdash';
import Signindash from './pages/SigninDashboard/Signindash';
import Addapi from './components/AddApi/Addapi';
import Myapidash from './pages/Marketplace/Myapidash';
import Footer from './components/Footer/Footer';
import Backgroundremover from './pages/Backgroundremoveapp/Backgroundremover';


const App = () =>{
    return(
       <Router>       
            <Routes>
                <Route exact path="/" element = {<Marketplace/>}/>
                <Route exact path="/signin" element = {<Signindash/>}/>
                <Route exact path="/signup" element = {<Signupdash/>}/>
                <Route exact path="/newapi" element = {<Addapi/>}/>
                <Route exact path="/myapi" element = {<Myapidash/>}/>
                <Route exact path="/bgremover" element = {<Backgroundremover/>}/>
            </Routes>
            <Footer/>
       </Router>
    )
}

export default App;