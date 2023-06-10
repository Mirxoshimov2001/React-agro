import React from 'react';
import {LocalPhone, Email, RoomSharp} from '@mui/icons-material';
import './footer_block_style.css'

const card_four = () => {
 
    return (
        <div>
            <div><h4>BOG'LANISH</h4></div>
            <div>
                <ul >
                    <li ><LocalPhone htmlColor='white' /><a href="tel: +998902160400"  className='a_' > Telefon Orqali Bog'lanish</a></li>
                    <li><Email htmlColor='white' /><a href="mailto:isf.message.info.2001@gmail.com"  className='a_'> Elektrom Pochta Orqali</a></li>
                    <li><RoomSharp htmlColor='white' /><a href="/maps"  className='a_' > Biz Joylashgan Manzil</a></li>

                </ul>
            </div>
        </div>
    );
}

export default card_four;
