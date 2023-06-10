

 
 import { useEffect, useState } from "react";
 import axios from "axios";
 import udrl from "../../Url_Const/Url";
 import Ordered from "../OrdredProduct/index"
 import { Card, CardHeader, CardContent, CardMedia, Button} from "@mui/material"
 import {VerticalAlignBottom, VerticalAlignTop} from "@mui/icons-material"


 import "./index.css"
 
 
 
 const All_product = (props) => {
  
    
 
     const [product, setProduct] = useState([]);
     const [showOrdred, setShowOrdred] = useState(false);
                 
 
                     
 
     useEffect(()=>{
 
         axios.get(udrl.Url_one_content+props.id)
         .then(products => {
            setProduct(products.data);
            console.log(product);
         })
         .catch(err => {
             console.log(err);
         })
     })
 
     return(
         <div>
            <Card className="card_product" >
                <CardHeader className="cardTitle" title={`Mahdulot nomi: ${product.title}`} subheader={`Mahsulot Narxi: ${product.price}`} />
                <CardMedia className="CardMedia" >
                    <img className="img_one"  src={udrl.Url_img+product.contentFileHashId} alt={product.title+".jpg"}  /> 
                 </CardMedia>
                <CardContent className="card_content" >
                    <h5>Mahsulot Turi: {product.content}</h5>
                    <h5>Mahsulot Miqdori: {product.quality}</h5>
                    <h5>Mahsulot Xavflilik darajasi:  {product.classes}</h5>
                    <br/>
                    <hr color="#aed581"/>
                    <h4>Mahsulot Haqida:</h4>
                    <p>{product.aboutContent}</p>
                </CardContent>
                    
                    <Button onClick={() => setShowOrdred(!showOrdred)} color="success">
                        {showOrdred ? <VerticalAlignTop fontSize="large" />
                          : <VerticalAlignBottom fontSize="large" />}
                        </Button>
            </Card>

            <div className="Order_block" >
                {
                    showOrdred ?
                      <Ordered Id={props.id} />
                    : <div></div> 
                }
            </div>

         </div>
     )
 }
 
 export default  All_product;
 
 
 
 