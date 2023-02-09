import React, { useState } from 'react'
import "./Pokecard.css"
import './App.css'
// import Pokedex from "./Pokedex.jsx"
import Pokegame from "./Pokegame.jsx"


function App() {

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <h1>Pokemon Go Card Game</h1>
      <Pokegame />
    </div>
  )
}

export default App
