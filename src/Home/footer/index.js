import React from 'react';
import Card_four from './card_four';
import Card_one from './card_one';
import Card_two from './card_two';
import './footer_block_style.css';

const index = () => {

    return (
        <div className='block_footer' >
                    
                     <div className='block_footer_center' >
                       
                        <div className='block_footer_block_collection' style={{display:"flex", justifyContent:"space-around"}}>
                            <Card_two/>
                            <Card_four/>
                        </div>
                        <div  className='block_footer_block_collection' >
                            <Card_one/>
                        </div>
                    </div>
        </div>
    );
}

export default index;
