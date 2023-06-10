import url from "../../../Url_Const/Url"
import axios from "axios"
import {useEffect,useState} from "react"
import { Card, CardHeader, CardMedia, CardContent, Button } from "@mui/material"

import "./Style.css"


const Body=()=>{

    const [advices , setAdveces] = useState([]);
     useEffect(()=>{
       axios.get(url.Url_advice)
            .then(advice => {
                console.log(advice.data);
                setAdveces(advice.data)
            })
    })
   
    return(
        <div className="" >
        <div className= "button_onclick">
             {
                 advices.map(element => {
                        return(
                            <div className="card_out_block_second_onlick" >
                                <CardMedia className="card_right_2" >
                               <img src={url.Url_img+element.pictureProduct_hashId} alt={element.pictureProduct_hashId+".jpg"}/>
                            
                             </CardMedia>
                             <Card className="block_left_2" >
                                 <CardHeader title={element.aboutUse} subheader={element.nameProduct} className="block_title" />
                                 <CardContent className="block_text" >
                                   <p> {element.textProduct}</p> 
                                 </CardContent>

                             </Card>
                            
                          </div>
                        )
                    
                 })
             }
            
        </div>
        
         </div>
    )

}


export default Body;