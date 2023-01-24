import React, {useState} from 'react';
import './App.css';
import Poke from './components/Poke'

function App() {
  const [showPoke, setShowPoke] = useState(false);

  const [allPokemon, setAllPokemon] = useState([])
  return (
    <>
      <Poke showPoke={showPoke} setShowPoke={setShowPoke} allPokemon={allPokemon} setAllPokemon={setAllPokemon} />
    </>
  );
}

export default App;
