import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import Product from "./All_product/index";
import Help from "./Help_center/index";
import Home from "./Home/index";
import Articles from "./Home/body/All_article/index"
import Maps from "./Home/maps/index"
import {Routes, Route, Link} from 'react-router-dom'
import {MenuOpen} from '@mui/icons-material'



import "./App.css"


function App() {
    const [show, setShow] = useState(false);

return (
    <div >

            
                            
                <div className="appBar_phone" >
                <AppBar position='static' color='' className='appbar'  >
                    <Button  color="success" onClick={()=>setShow(!show)} ><MenuOpen fontSize='large' /></Button>
                    {
                        
                        show ?
                            <div  >
                            <Link to="/" className="link_" >Bosh sahifa</Link><br/>
                            <Link to="/all_product" className="link_" >Barcha Mahsulotlar</Link><br/>
                            <Link to="/article" className="link_" >Maqola va ...</Link><br/>
                            <Link to="/help" className="link_" >Yordam...</Link><br/>
                            </div>
                            : <div></div>
                        
                    
                    }
                    </AppBar>
                    
                </div>
        <div className="product_all" >
        <Routes>
                <Route path="/all_product" element={<Product />}/>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
                <Route path="/article" element={<Articles />} />
                <Route path="/maps" element={<Maps />} />
        </Routes>
        </div>
    
    </div>
);
}

export default App;
