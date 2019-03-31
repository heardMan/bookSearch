import React, {Component} from "react";

class SearchResults extends Component{
    render(){
        return(
        <div className="row">
            <div className="col-12">
                <div className="card rounded-0">
                    {this.props.state.results.map((result, i) => {

                        return(
                            <div key={`result-${i}`} className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <p>{result.id}</p>
                                        <p>{result.volumeInfo.title}</p>
                                        {result.volumeInfo.authors.map((author,j)=>{

                                            return(
                                                <p key={`${result.volumeInfo.title}-author-${j}`}>{author}</p>
                                            );
                                        })}
                                        <p>{result.volumeInfo.description}</p>
                                        <img className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail} alt=""/>
                                        <a href={result.volumeInfo.previewLink}>Preview</a>
                                        
                                        <span>
                                        <span className="mr-2">Add to favorites</span>
                                            <button 
                                                onClick={this.props.saveBook} 
                                                name={`${i}`} 
                                                
                                                className="btn btn-primary rounded-circle m-2">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </span>
                                       
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

export default SearchResults;