import React from 'react'

import './App.css'
import Entete from './entete'
import CarteRando from './CarteRando'
import randonnees from './randonnees.json'
import ListeRandos from './ListeRandos'

function App() {
  return (
    <>
      <Entete />
      <CarteRando rando={randonnees[0]} />
      <ListeRandos randos={randonnees} />
          </>
  )
}

      
export default App