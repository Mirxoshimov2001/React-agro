
 
 import { useEffect, useState } from "react";
import axios from "axios";
import udrl from "../Url_Const/Url";
import {Radio, FormControlLabel, RadioGroup,Card, CardHeader, CardMedia,Button} from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FilterListIcon from '@mui/icons-material/FilterList';
import Product from "./useFunction/Functions"
import "./useFunction/index.css"




const All_product = () => {
 
   

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("/");
    const [Cname, setCName] = useState("radioGrupContainer_close")
    const [allOne, setAllOne] = useState(true)
    const [id, setId] = useState(0)
    
                

                    

    useEffect(()=>{

        axios.get(udrl.URL_all_product+filter)
        .then(product => {
           setProducts(product.data);
           console.log(products);
        })
        .catch(err => {
            console.log(err);
        })

      
    })

    
        
    
   function  OnFilterChange(event){
        setFilter(event.target.value)
        setCName("radioGrupContainer_close")

    }

    function openMenu() {
        setCName("radioGrupContainer_open")
    }
    function closeMenu() {
        setCName("radioGrupContainer_close")
        console.log("ishlayapman")
    }
  

   
    return(
        
        <div>
            { 
                    
            allOne
            ?
            <div>
                <div  >
                    <Button onClick={openMenu} color="success" > <FilterListIcon color="success" />Filtrlash </Button>
                </div>
                <div className={Cname} onClick={closeMenu}  >
                    <RadioGroup  value={filter} onChange={OnFilterChange} >
                        <FormControlLabel value="/Zahar" control={<Radio />} label="Zaharlar " className="color1" />
                        <FormControlLabel value="/o'g'it" control={<Radio />} label="O'g'itlar " className="color1" />
                        <FormControlLabel value="/Boshqa" control={<Radio />} label="Boshqa... " className="color1"/>
                        <FormControlLabel value="/" control={<Radio />} label="Barchasi"className="color1" />
                    </RadioGroup>
                </div>
                <div className="card_block" >
                {
                        products.map((elements) => {
                            return(
                                <Card className="Card" >
                                    <CardHeader className="cardTitle" title= {elements.title} subheader={`Mahsulot Narxi: ${elements.price}`} />
                                    <CardMedia className="CardMedia">
                                        <img className="img" src={udrl.Url_img+elements.contentFileHashId} alt="nimalardur"  />
                                    </CardMedia>
                                    <Button color="success" onClick={() => {
                                        setAllOne(false)
                                        setId(elements.id)
                                        console.log(id);
                                    }} >Batafsil...</Button>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
            :
        <div  className="one_product_card" >
             <Button className="cloase_content"  onClick={()=> setAllOne(true)} ><HighlightOffIcon fontSize="large" color="success"  /></Button>
            <Product id={id} />
        </div>
            }   
    </div>
           
     
    )
}
export default  All_product;



