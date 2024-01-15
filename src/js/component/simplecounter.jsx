import React from "react";
import PropTypes from "prop-types";

const SimpleCounter=(props) =>{
    return(
        <> 
            <div>{props.hundredThousandsDigit}</div>
            <div>{props.tenThousandsDigit}</div>
            <div>{props.thousandsDigit}</div>
            <div>{props.hundredsDigit}</div>
            <div>{props.tensDigit}</div>
            <div>{props.onesDigit}</div>
        
        </>
    )
}

SimpleCounter.propTypes={
        onesDigit: PropTypes.number,
        
}

export default SimpleCounter