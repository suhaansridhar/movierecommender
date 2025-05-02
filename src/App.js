import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom';

export default function App(){
  return(
    <div>
      <NavBar />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  )
}