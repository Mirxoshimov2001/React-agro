import url from "../../Url_Const/Url"
import axios from "axios"
import {useEffect,useState} from "react"
import { CardMedia, Button,  } from "@mui/material"
import {Link} from "react-router-dom"
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

import "./Style_body.css"


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
        <div className="block_out_article">
             {
                 advices.map(element => {
                        return(
                            <div className="card_article_block" >
                                <CardMedia className="card_article_img_block" >
                                <img src={url.Url_img+element.pictureProduct_hashId} alt={element.pictureProduct_hashId+".jpg"}/>
                                
                                </CardMedia>
                                <div className="card_article_text" >
                                    <h4>{element.aboutUse}</h4> 
                                    <h5>{element.nameProduct}</h5>
                                </div>
                            
                          </div>
                        )
                    
                 })
             }
            
        </div>
        <Link to="/article"   className="all_article_link"  ><Button color="error" className="button_" ><ArrowRightAltRoundedIcon fontSize="large" color="success" /> </Button></Link>
         </div>
    )

}


export default Body;