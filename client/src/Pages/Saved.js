import React, {Component} from "react";
import Welcome from "../Components/Welcome/Welcome";
import SavedBooksComponent from "../Components/SavedBooks/SavedBooks"

class Saved extends Component{
    render(){
        return(
            <div>
                <Welcome />
                <SavedBooksComponent />
            </div>
        );
    }
}

export default Saved;