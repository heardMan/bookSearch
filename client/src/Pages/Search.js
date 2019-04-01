import React, {Component} from "react";
import Welcome from "../Components/Welcome/Welcome";
import SearchComponent from "../Components/Search/Search";
import SearchResults from "../Components/SearchResults/SearchResults";

class Search extends Component{
    render(){
        return(
            <div>
                <Welcome  match={this.props.match}/>
                <SearchComponent state={this.props.state}
                                handleFormSubmit={this.props.handleFormSubmit}
                                handleInputChange={this.props.handleInputChange}
                />
                
                <SearchResults state={this.props.state}
                                handleFormSubmit={this.props.handleFormSubmit}
                                saveBook={this.props.saveBook}/>
            </div>
        );
    }
}

export default Search;