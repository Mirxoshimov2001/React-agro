import { Facebook, Instagram, Telegram, MusicNoteSharp } from '@mui/icons-material';
import React from 'react';
import  './footer_block_style.css'
const card_one = () => {
 
    return (
        <div style={{marginTop:"-20px", color:"white"}} >
           
            <div>
                <p style={{color:'white'}} >
                    Biz siz bilan hamkorlik qilishdan mamnunmiz! Sizchi?! Agar biz bialn hamkorlik qilishni istasangiz murojat qiling! Biz sizga sifatli maxsulot, bilim va tajriba asosida yordam beramiz. Manzilimiz Oltimko'l tumani Uyshin MFY.
                </p>
            </div>
            <div>
                <h4>IJTIMOIY TARMOQLAR</h4>
                <p className='messengers' >
                    <a className='messengers' href="#"><Telegram/></a>
                    <a className='messengers' href="#"><Facebook/></a>
                    <a className='messengers' href="#"><Instagram/></a>
                    <a className='messengers' href="#"><MusicNoteSharp/></a>
                </p>
            </div>
        </div>
    );
}

export default card_one;
