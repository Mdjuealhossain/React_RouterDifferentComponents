import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./Pages/Home"
import Tutorial from "./Pages/Components/Tutorial"
import Contact from "./Pages/Components/Contact";
import Navbar from "./Pages/Navpage/Navbar"


import Blogs from "./Pages/Components/Blogs";
import './App.css';


function App() {
  return (

  <BrowserRouter>
 <Navbar />
 
 <Routes>
  <Route path="/" element={<Home contact={Contact}/>}/>
  <Route path="blogs" element={<Blogs contact={Contact}/>}/>
  <Route path="tutorial" element={<Tutorial contact={Contact} />}/>
 </Routes>
 
 </BrowserRouter>
 
  );
}

export default App;
