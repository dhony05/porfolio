import React from 'react';
import './Contactme.css'

const platform = (props) => {
    
    return(
        <div className="c-card">
            {/* <a href="google.com" className={props.platform}> */}
            {/* <a style={{background:"white"}}href=""/> */}
            <a href={props.valueRef}  target="_black">
            <i className={props.icon} ></i>
            
            </a>
            
                <p>{props.value}</p>
                
          

            {/* </a> */}
            </div>
    )
}

export default platform;