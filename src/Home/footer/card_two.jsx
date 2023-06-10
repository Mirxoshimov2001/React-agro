import React from 'react';
import { Link } from 'react-router-dom';
import  './footer_block_style.css'

const card_two = () => {
  
    return (
        <div>
            <div>
                <h4>NAVIGATSIYA</h4>
            </div>
            <div>
                <ul>
                    <li><Link to="/" className='a_' >Bosh Sahifa</Link></li>
                    <li><Link to="/all_product" className='a_' >mahsulotlar</Link></li>
                    <li><Link to="/article" className='a_' >Malumotlar</Link></li>
                    <li><Link to="/help" className='a_' >Yordam </Link></li>
                </ul>
            </div>
        </div>
    );
}

export default card_two;
