import React from "react";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Sanjay's Learning</h1>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="Categeory">Categeory</a>
                <a href="/create">New Blog</a>
                <a  href='/abouts'>About Us</a>

            </div>
       </nav>
     );
}
 
export default Navbar;