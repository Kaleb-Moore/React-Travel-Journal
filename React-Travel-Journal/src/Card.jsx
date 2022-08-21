import React from 'react';
import pin from "./images/pin.svg"


export default function Card(props) {
    return (
        <div className='Card'>
            <img src={props.imageUrl} alt="" className="card--image" />
            <div className="card--text">
    
                <div className="card--links">
                    <img className='card--pin' src={pin} alt="" />
                    <p className='card--location'>{props.location}</p>
                    <a className='card--map' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
    
                <h1 className='card--title'>{props.title}</h1>
    
                <h3 className="card--dates">{props.startDate} - {props.endDate}</h3>
    
                <p className="card--info">{props.description}</p>
            
            </div>
        </div>
    )
}