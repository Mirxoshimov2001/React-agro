
import img from '../../static/1.jpg'
import './Style.css'
const HomeHeader=()=>{
return(
    <div className="headerBlock" >
        <div className="headerText">
            <h1> Bir Necha Yillik Tajriba,  </h1>
            <h2>Bilim va Malaka Asosida Xosilingizni Yaxshilang</h2>
            <h3>Biz Bilan Bo'ling!</h3>
        </div>
        <div className="headerImg">
            <img src={img} alt="tabiat" />
            
        </div>
    </div>
)
}

export default HomeHeader;