import React from 'react';
import img404 from '../assets/images/404.jpg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>mmm... a donde vas amigo?</h1>
            <h2>404 Not Found</h2>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={img404} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default NotFound;