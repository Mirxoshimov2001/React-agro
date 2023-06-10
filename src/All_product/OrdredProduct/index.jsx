


import { useEffect, useState } from "react";
import {TextField, Button} from "@mui/material"
import {Send} from "@mui/icons-material"
import axios from 'axios'
import ErrorMessage from "./Message/ErrorMessage";
import Congurations from "./Message/Congurations";
import Uri from '../../Url_Const/Url'


const OrdredProduct=(props)=>{
    const [ErrorBlock, setErrorBlock] = useState(false);
    const [Conguration, setConguration] = useState(false);
    const [textMessage, setTextMessage] = useState(null);
   const [content_id, setContent_Id] = useState(null);
   const  content_name = null ;
   const [order_Quality, setOrder_Quality] = useState(null);
   const [name, setName] = useState(null);
   const [surname, setSurname] = useState(null);
   const [email, setEmail] = useState(null);
   const [number, setNumber] = useState(null);

  useEffect(()=>setContent_Id(props.Id))


  function OrdredSend() {
    if (content_id !== null &&
         order_Quality !== null &&  order_Quality !=="" &&
         name !== null && name !== "" &&
         surname !== null && surname !== "" &&
         email !== null && email !== "" && email !== 0 &&
         number !== null && number !== 0 && number !== "" ) {
            axios.post(Uri.Url_order,{
                content_id,
                content_name,
                order_Quality,
                name,
                surname,
                email,
                number
            })
            .then(e => {
                       setConguration(true);
                       setErrorBlock(false);
                       setTextMessage(e.data);
                     })
            .catch(e => console.log(e))
    }
    

    setErrorBlock(true)
    setConguration(false)
   
    
  }
  
    return(
        <div className="order_block_inline" >
                        
                            
                            {
                                ErrorBlock ?  <ErrorMessage text={"Barcha joylarni to'ldirganingizga ishonch xosil qiling! Malumotlar Ykunlanmagan"} />
                                : Conguration ? <Congurations text={textMessage} /> 
                                : <div>
                                <TextField
                                        id="filled-multiline-static"
                                        label="Buyurtma hajmini kirting"
                                        fullWidth
                                        color="success"
                                        rows={4}
                                        variant="filled"
                                        onChange={(event) => setOrder_Quality(event.target.value.trimStart())}
                                        className="order_block_inline_"
                                            />
                                <TextField
                                                id="filled-multiline-static"
                                                label="Buyurtma Beruvchi ismi"
                                                fullWidth
                                                color="success"
                                                rows={4}
                                                variant="filled"
                                                onChange={(event) => setName(event.target.value.trimStart())}
                                                className="order_block_inline_"
                                            />
                                <TextField
                                                id="filled-multiline-static"
                                                label="Buyurtma beruvchi familiyasi"
                                                fullWidth
                                                color="success"
                                                rows={4}
                                                variant="filled"
                                                onChange={(event) => setSurname(event.target.value.trimStart())}
                                                className="order_block_inline_"
                                            />
                                <TextField
                                                id="filled-multiline-static"
                                                label="Buyurtma beruvchi email manzili"
                                                fullWidth
                                                color="success"
                                                rows={4}
                                                variant="filled"
                                                onChange={(event) => setEmail(event.target.value.trimStart())}
                                                className="order_block_inline_"
                                            />
                                <TextField
                                                id="filled-multiline-static"
                                                label="Buyurtma beruvhci telefon raqami"
                                                fullWidth
                                                color="success"
                                                rows={4}
                                                variant="filled"
                                                onChange={(event) => setNumber(event.target.value.trimStart())}
                                                className="order_block_inline_"
                                            />

                            <Button color="success" onClick={OrdredSend} >  Buyurma Berish <Send /> </Button>
                            </div> 
                                
                            }
                        
            
        </div>
    )

}

export default OrdredProduct;