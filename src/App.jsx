import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Data from './data.js'
import './App.css'

export default function App(props) {

const cards = Data.map(card => {
  return <Cards 
    key = {card.id}
    card = {card}
    />
})

  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
        {cards}
        </section>        
      </div>
    )
}
