import {Error} from "@mui/icons-material"
import "../index.css"
const ErrorPage=(props) =>{
    return(
        <div className="errorBlock" >
          <h4><Error fontSize="large" /></h4>
          <p>{props.text}</p>
        </div>
    )
}

export default ErrorPage;


