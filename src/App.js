import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom';

export default function App(){
  return(
    <div>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  )
}