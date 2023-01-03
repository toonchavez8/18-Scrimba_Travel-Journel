import React from 'react'
import './Nav.css'
import world from '../assets/world-logo.png'

export default function Nav() {
  return (
    <nav className='Nav--container'>
        <div className='Nav--logo--container'>
            <img className='Nav--logo' src={world} alt="world icon" />
        </div>
        <h1 className='Nav--title'>My travel Journal.</h1>
    </nav>
  )
}
