import React, { Component } from "react";
import API from "../../Ultilities/API";

class SavedBooksComponent extends Component {
    state = {
        savedresults: []
    };
    componentDidMount() {
        this.getSavedBooks();

    }
    getSavedBooks = () => {
        API.getBooks()
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    savedresults: resp.data
                })
            })
            .catch(err => console.log(err));
    }
    deleteBook = event => {
        event.preventDefault();
        console.log(event.target.id)
        API.deleteBook(event.target.id)
            .then(resp => {
                console.log(resp)
                this.getSavedBooks();
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card rounded-0 border-0 p-3 m-3 main-bg">
                        {this.state.savedresults.map((elem, i) => { 
                            return (
                                <div key={i} className="row">
                                    <div className="col-12">
                                        <div className="card rounded-0 m-3 p-3 gray card-shadow">
                                            <div className="row">
                                                <div className="col-12 col-md-4 my-auto">
                                                    <div className="card rounded-0 border-0 p-3 ">
                                                        <div className="card-img-top">
                                                            <div className="row">
                                                                <img className="img-fluid mx-auto pic-hover" src={elem.image} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="card-body m-0">
                                                            <div className="row">
                                                                <div className="col-6 m-0 p-0">
                                                                    <div className="text-center m-0 border-top border-bottom">
                                                                        <a href={elem.link} className="text-primary">Preview</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 m-0 p-0">
                                                                    <div className="text-center m-0 border-top border-bottom">
                                                                        <a id={elem._id} onClick={this.deleteBook} className="text-danger">Delete</a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-8">
                                                    <div className="card rounded-0 border-0">
                                                        <div className="card-title text-center">
                                                            <p><b>Title: </b>{elem.title}</p>
                                                            
                                                        </div>
                                                        <div className="card-title text-center">
                                                            <p><b>Author(s): </b></p>
                                                            {elem.authors.map((author, j)=>{
                                                                if(j === elem.authors.length -1){
                                                                    return(
                                                                        <span>{author.name}</span>
                                                                    )
                                                                } else {
                                                                    return(
                                                                        <span>{author.name}, </span>
                                                                    )
                                                                }
                                                                
                                                            })}
                                                            
                                                        </div>
                                                        <div className="card-body">
                                                            <p><b>Description: </b>{elem.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            );
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default SavedBooksComponent;