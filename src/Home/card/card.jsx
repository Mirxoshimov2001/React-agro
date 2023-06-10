import React from 'react';
import CastIcon from '@mui/icons-material/CastConnected';
import HandymanIcon from '@mui/icons-material/Handyman';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import "./Style.css"
const icons = [<CastIcon/>, <AccessTimeIcon/>, < AccountBalanceIcon/>, <HandymanIcon/>]

const card = (props) => {
    return (
        <div className="block_two_collections">
          <div className="block_two_icon" >
            {icons[props.id]}
          </div>
        <h6>{props.text1}</h6>
          <h6>{props.text2}</h6>
    </div>
    );
}

export default card;
