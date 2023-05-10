import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
  const coffees = useLoaderData()

  return (
    <div>
      <h1 className='text-purple-600 text-6xl mb-5'>Hot & Cold Coffee: {coffees.length}</h1>
      <div className='container mx-auto grid md:grid-cols-2 gap-5 w-3/4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}>
          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
