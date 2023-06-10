import {useEffect, useState } from "react";
import {Button, TextField} from "@mui/material"
import axios from "axios";
import {Upload} from "@mui/icons-material"

import URL from "../../Url_Const/Url";
import "../index.css"
const  ClientQuestion = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [reponseMessage, setResponseMessage] = useState("");
    const [validate, setValidate] = useState("Iltimos haqiy pochta manzilingizni kiriting! savolingizga javob kiritilgan pochta manziliga yuboriladi");

useEffect(() => setQuery(props.text))
   
        
   

    function dataQuery() {
        // setQuery(props.text)
        if(name.length > 3){
        setValidate("Etiboringiz Uchun Rahmat")
        axios.post(URL.Url_help+"/post", {
            name,
            query,
            email    
        }).then(e =>{setResponseMessage(e.data)}).catch(e => {console.log(e);})
        
    }else{setValidate("Ism Maydonnida kamida 4 ta belgi bo'lishi kerak")}
        
       
    }
    
    return(
        <div className="question_blog" >
        
            
                 <p>{validate}</p>
           
            
            <br />

            <TextField
                 id="outlined-multiline-flexible"
                 label="Ism va familyangizni kiriting"
                 fullWidth
                 color="success"
                 maxRows={4}
                onChange={(event)=>setName(event.target.value.trim())}
            />
            <br />
            <br />
            <TextField
                 id="outlined-multiline-flexible"
                 label="Email manzilingizni kiritng"
                 fullWidth
                 color="success"
                 maxRows={4}
                onChange={(event)=>setEmail(event.target.value)}
            />
            {
                reponseMessage.length > 0 ?
                <p>{reponseMessage}</p>
                :  <p>SAVOL:   {query}</p>
            }
           

            <Button color="success" onClick={dataQuery}  ><Upload/></Button>
        </div>
    )
}

export default ClientQuestion;