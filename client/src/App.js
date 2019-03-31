import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import NoMatch from "./Components/NoMatch/NoMatch";
import API from "./Ultilities/API";


class App extends Component {
  
  state = {
    user: "",
    query: "",
    results: [],
    saveBook: "",
    savedBooks:[]
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    })
};

handleFormSubmit = event => {
  event.preventDefault();
  if(event.target.name === "bookSearch"){
    API.searchBooks(this.state.query)
    .then(resp=>{
      console.log(resp.data.items);
      this.setState({
        results: resp.data.items
      })
    })
    .catch(err=>console.log(err));
  } 

};

saveBook = event => {
 
    console.log("saving");
    console.log(event.target.name);
    console.log(this.state.results[event.target.name]);
    const bookToSave = this.state.results[event.target.name];
    
    const newBook = {
      id: bookToSave.id,
      title: bookToSave.volumeInfo.title,
      authors: [],
      description: bookToSave.volumeInfo.description,
      image: bookToSave.volumeInfo.imageLinks.thumbnail,
      link: bookToSave.volumeInfo.infoLink,

    }
    bookToSave.volumeInfo.authors.forEach(element=>{
      newBook.authors.push({name: element});
    })
    API.saveBook(newBook)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
    
}



  render() {
    return (
      <Router>
        <div>
          <Navbar state={this.state} />

          <Switch>
            <Route exact path="/" 
              render={(routeProps) => (<Search {...routeProps} 
                                              state={this.state}
                                              handleFormSubmit={this.handleFormSubmit}
                                              handleInputChange={this.handleInputChange}
                                              saveBook={this.saveBook}
                                        />)}
             />
            <Route path="/Saved" 
              render={(routeProps) => (<Saved {...routeProps} 
                                              state={this.state}
                                              getSavedBooks={this.getSavedBooks}/>)}
            />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router >
    );
  }
}

export default App;
