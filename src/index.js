import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Link} from 'react-router-dom'
import {AppBar, Button} from '@mui/material'



function r (params) {
    return !params;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

        <AppBar className="App_bar"  position='relative' color='' >
            <div className="appBar_desktop" >
                <Link to="/" className="link_" >Bosh sahifa</Link>
                <Link to="/all_product" className="link_" >Barcha Mahsulotlar</Link>
                <Link to="/article" className="link_" >Maqola va ...</Link>
                <Link to="/help" className="link_" >Yordam...</Link>
            </div>
        </AppBar>
      <App />

    </BrowserRouter>
     
);

reportWebVitals();
