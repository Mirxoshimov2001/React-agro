import Body from "./body/index"
import Person from "./body_person/index"
import Header from "./header/navbar/index"
import Collection from "./card/collection"
import Footer from './footer/index'
import "./card/Style.css"
import Maps from "./maps"

const Home=()=>{
    return(
        <div>
            <div style={{marginBottom:'50px'}} >
               <Header />
            </div>
            <div style={{marginBottom:'50px'}}  >
                <Collection/>
                
            </div>
            <br/>
           <div style={{marginBottom:'50px'}}  >
               <Body />
               
           </div  >
           <br/>
            <div style={{marginBottom:'50px'}}>
               <Person />
            </div>
            <div>
                <Maps />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;