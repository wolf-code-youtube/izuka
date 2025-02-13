import './App.css'
import Quiz_1 from './components/Quiz_1'
import Quiz_2 from './components/Quiz_2'
import CarGame from './components/CarGame'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameStart from './components/GameStart'
import GameMap from './components/Map1'
import CardGame from './components/CardGame'
import GameMap2 from './components/Map2'
import GameMap3 from './components/Map3'
import GameMap4 from './components/Map4'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<GameStart/>}/>
      <Route path="/map1" element={<GameMap/>}/>
      <Route path="/1" element={<Quiz_1/>}/>
      <Route path="/map2" element={<GameMap2/>}/>
      <Route path="/2" element={<Quiz_2/>}/>
      <Route path="/map3" element={<GameMap3/>}/>
      <Route path="/3" element={<CarGame/>}/>
      <Route path="/map4" element={<GameMap4/>}/>
      <Route path="/4" element={<CardGame/>}/>
      </Routes></BrowserRouter>
    </>
  )
}

export default App
