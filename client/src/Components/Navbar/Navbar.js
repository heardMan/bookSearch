import React, {Component} from "react";

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark py-4 nav-shadow fixed-top">
            <a className="navbar-brand" href="#">Book Search</a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
               
                  <a className="nav-link" href="/">Search </a>
                  
                </li>
               <li className="nav-item active">
               <a className="nav-link" href="/Saved">Saved </a>
               </li>
                
              </ul>
            
          </nav>
        );
    }
}

export default Navbar