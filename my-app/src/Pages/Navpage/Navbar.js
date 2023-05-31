import React from "react"
import {NavLink} from "react-router-dom"

const Navbar =()=>{

    return(
       <nav>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplcRF0mFmpvaFFk6Kr3pSq2C0BUnlQPC8QGitrO7oPKgAQN8ktmjnkivBkb-ti8ddVwo&usqp=CAU" alt="cse" height="70px" width="100px"  className="nav-link"></img>
        <NavLink to="/" className="nav-link"  >Home</NavLink>
        <NavLink to="blogs" className="nav-link" >Blogs</NavLink>
        <NavLink to="tutorial" className="nav-link" >Tutorial</NavLink>
       </nav> 


    )
}

export default Navbar