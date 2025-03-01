import React from 'react'
import data from './data'
import './index.css'

import ContenedorTours from './components/ContenedorTours'
import ListaTours from './components/ListaTours'

export default function App () {
  const toursFiltrados = data.filter((tour) => tour.info)

  return (
    <main>
      <ContenedorTours tours={toursFiltrados} />
      <ListaTours tours={toursFiltrados} />
    </main>
  )
}