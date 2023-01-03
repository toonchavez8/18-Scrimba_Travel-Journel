import React, { useState } from 'react'
import './Card.css'
import location from '/location.png'
import Modal from 'react-modal';




export default function Card(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    

  return (
    <div className="Card">
        <div className="Card--img-container">
            <img className='Card--img' src={props.card.imageUrl} alt={props.card.title} onClick={() => setModalIsOpen(true)} /> 
         
        </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Card--Img-Modal">
            <img src={props.card.imageUrl} alt={props.card.title} />
            </Modal>
        <div className="Card--content">
            <div className="Card--MetaDetails">
                <img className='Card--location-icon' src={location} alt="location icon" />
                <p className="Card--location">{props.card.location}</p>
                <a className='Card--Gmaps' href={props.card.googleMapsUrl}>view on google maps</a>
            </div>
            <h3 className="Card--title">{props.card.title}</h3>
            <p className="Card--date">{props.card.startDate} - {props.card.endDate}</p>
            <p className="Card--description">{props.card.description}</p>
        </div>
    </div>

  )
}
