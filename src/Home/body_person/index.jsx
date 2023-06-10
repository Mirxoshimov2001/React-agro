import url from "../../Url_Const/Url"
import axios from "axios"
import {useEffect,useState} from "react"
import { Card, CardHeader, CardMedia, CardContent, Button } from "@mui/material"
import Carousel from 'react-elastic-carousel'
import {ArrowRight, ArrowLeft, Adjust, CheckCircleOutline, Email, Telegram} from "@mui/icons-material"

// import { Carousel } from 'react-responsive-carousel';
// import '~react-responsive-carousel/lib/styles/carousel.min.css';


import "./style.css"
const handleDragStart = (e) => e.preventDefault();

const Body=()=>{

    const [advices , setAdveces] = useState([]);
    
    useEffect(()=>{
       axios.get(url.Url_user)
            .then(advice => {
                console.log(advice.data);
                setAdveces(advice.data)
            })
            
    })
  
    
  
   

    const renderArrow = ({ type, onClick }) => {
      const arrowStyle = {
        color: 'black',
        backgroundColor: 'transparent',
        transition: 'color 0.3s ease-out'
      };
  
      const arrowHoverStyle = {
        color: "#aed581"
      };
  
      return (
        <button
          onClick={onClick}
          style={arrowStyle}
          onMouseEnter={e => {
            e.target.style.color = arrowHoverStyle.color;
          }}
          onMouseLeave={e => {
            e.target.style.color = arrowStyle.color;
          }}
          className="buttton_carusel"
        >
          {type === 'PREV' ? <ArrowLeft fontSize="large" color="success" /> : <ArrowRight fontSize="large" color="success" />}
        </button>
      );
    };
   
    const renderPagination = ({ pages, activePage, onClick }) => {
      return (
        <div>
          {pages.map(page => {
            const isActive = page === activePage;
            return (
              <button 
                key={page}
                onClick={() => onClick(page)}
                style={{ background: isActive ? "#dcedc8" : '#dcedc8', margin:'5px', outline:'none', border:'none', borderRadius:'50%', textAlign:'center', verticalAlign:'middle' }}

              >
                { isActive ?<CheckCircleOutline fontSize="large" color="success"/> : <Adjust  fontSize="large" color="success" />}
              </button>
            );
          })}
        </div>
      );
    };

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 2 },
      { width: 1200, itemsToShow: 2 }

    ];
    return(
        // <div className="" >
        <Carousel  className="carousel" renderArrow={renderArrow}  renderPagination={renderPagination} breakPoints={breakPoints} isInfinite={true} >
          
          {advices.map(element =>{
            return(
              <div className="slide">
                    <Card className="carusel_card" onDragStart={handleDragStart} role="presentation"  >
                      <CardMedia className="carousel_media_"> 
                          <img src={url.Url_img + element.picture_user_hashId} alt={element.picture_user_hashId} style={{position:"absolute"}} />
                          <div style={{position:"absolute", width:"60%"}} >
                            <h5 style={{padding:"5px"}} >{element.name}</h5>
                            <h5 style={{padding:"5px"}}>{element.surname}</h5>
                          </div>
                      </CardMedia>
                      <CardContent className="carusel_content">
                          <a href={`mailto:${element.email}`} style={{marginRight:'10px'}}><Email color="success" /></a>
                          <a href={element.t_me_address}><Telegram color="success" /></a>
                          <p>{element.whoIs}</p>
                      </CardContent>
                   </Card>
              </div>
              
            )
          
          })}
        </Carousel>
         
    )

}




export default Body;

