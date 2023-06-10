import { useState, useEffect} from 'react';
import axios from 'axios';
import url from '../Url_Const/Url';
import {  Card,CardHeader, CardContent,SnackbarContent,TextField, Button } from '@mui/material';
import Query from "./Question/Question"
import CloseIcon from '@mui/icons-material/Close';
import {Send} from '@mui/icons-material';
import ErrorBloc from './Question/Error'
import './index.css';

const Help = () =>{

    const [element, setElement] = useState([])
    const [noneElement, setNoneElement] = useState(true)
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false)
    const [text, setText] = useState("");

    useEffect(() => {
        axios.get(url.Url_help)
             .then(eventElement => setElement(eventElement.data))
             .catch(e => console.log(e))   
    
         if(text.length > 3) {setShowError(false)}
         else{
         setShowError(true)}
         })

     const timerId = setInterval(()=>{
        if (element.length === 0) setNoneElement(false);
            setNoneElement(true); 
     }, 15000) 
     clearInterval(timerId) 

    function ShowBlock() {
        if(text.length > 3) setShow(!show)
        
    }

   
    return(
        <div className="query_block" >
            {
                showError ?
                 <ErrorBloc text={"Savol haqiqiy bolishi kerak"}/>
                 : <div></div>
            }
            {
                noneElement  ?
                <div>
                {
                    element.map((elementHelp) => {
                        return(
                            <Card className="card_help" >
                                <CardHeader title={elementHelp.name}  />
                                <CardContent className="card_ansever_query" >{"SAVOL: "+ elementHelp.query}</CardContent>
                                <CardContent className="card_ansever_query" >{"JAVOB: "+elementHelp.ansever}</CardContent>
                                <a href={"https:\\"+ elementHelp.email} > <CardContent>{"email: "+elementHelp.email}</CardContent></a>
                            </Card>
                        )
                    })
                }
                </div>
                  : <SnackbarContent
                     open={true}
                     message="Malumotlar mavjud emas! Savollar so'ralmagan yoki eskirgan" 
                  />

                   
            } 
            {
             show ?  <div className="query_information" >
                     <Button color="success" className="button_close"   onClick={ShowBlock} ><CloseIcon /></Button>
                    <Query text={text} />
                </div>
             : <div className="query_text">
                    
                        <TextField
                            id="filled-multiline-static"
                            label="Savolingizni Yo'llang - Biz Unga Javob Beramiz"
                            fullWidth
                            color="success"
                            rows={4}
                            variant="filled"
                            onChange={(event) => setText(event.target.value.trimStart())}
                            className='text__'
                        />
                        <Button color="success" className="button_"  onClick={ShowBlock} > <Send fontSize='large' /></Button>
                </div>
                
            }
    </div>
    )
}
export default Help;