import React from 'react'
import Card from './Components/Card.jsx'
import Nav from './Components/Nav.jsx'
import './App.css'
import data from './api/data'

export default function App() {
  const cards = data.map (card => {
    return (
      <Card
        key={card.id}
        card={card} 
      />
    )
  })

  return (
    <main>
      <Nav />
      <section className="Cards">
        {cards}
      </section>
    </main>
  )
}
