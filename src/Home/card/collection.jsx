import React from 'react';
import Element from './static'
import Card from './card';
import "./Style.css";

const collection = () => {
    return (
        <div className="block_two_collection" >
            <div className="block_two_inner" >
                {
                    Element.map(element => {
                        return (
                          <Card id={element.id} text1={element.tex1} text2={element.text2}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default collection;
