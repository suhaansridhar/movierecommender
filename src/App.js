import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom';

export default function App(){
  return(
    <div>
      <NavBar />
      <h2>Checking the branch</h2>
      <h4>In main branch</h4>
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  )
}