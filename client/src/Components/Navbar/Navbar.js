import React, {Component} from "react";

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Book Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
               
                  <a className="nav-link" href="/">Search </a>
                  
                </li>
               <li className="nav-item active">
               <a className="nav-link" href="/Saved">Saved </a>
               </li>
                
              </ul>
            </div>
          </nav>
        );
    }
}

export default Navbar