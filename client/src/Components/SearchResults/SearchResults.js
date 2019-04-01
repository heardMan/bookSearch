import React, {Component} from "react";
import noImg from "../../../public/noImg.png"

class SearchResults extends Component{
    render(){
        if(this.props.state.results === undefined){
            return(
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>No results... next time try a <em>GOOD</em> book</h4>
                    </div>
                </div>
            );
        } else {
        return(
        <div className="row">
            <div className="col-12">
                <div className="card border-0 rounded-0 main-bg">
                    {this.props.state.results.map((result, i) => {
                        let description = result.volumeInfo.description;
                        let imgLink = result.volumeInfo.imageLinks;
                        if(imgLink === undefined){
                            imgLink = noImg;
                        } else {
                            imgLink = result.volumeInfo.imageLinks.thumbnail;
                        }
                        
                        if(
                            description === undefined
                            
                          ){
                                description = "No description available";
                            }
                        return(
                        <div key={`result-${i}`} className="row">
                                    <div className="col-12">
                                        <div className="card rounded-0 m-3 p-3 gray card-shadow">
                                            <div className="row">
                                                <div className="col-12 col-md-4 my-auto">
                                                    <div className="card rounded-0 border-0 p-3 ">
                                                        <div className="card-img-top">
                                                            <div className="row">
                                                                <img className="img-fluid mx-auto" src={imgLink} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="card-body m-0">
                                                            <div className="row">
                                                                <div className="col-6 m-0 p-0">
                                                                    <div className="text-center m-0 border-top border-bottom">
                                                                        <a href={result.volumeInfo.infoLink} className="text-primary">Preview</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 m-0 p-0">
                                                                    <div className="text-center m-0 border-top border-bottom">

                                                                        <a className="text-primary"
                                                                        onClick={this.props.saveBook} 
                                                                        name={`${i}`}>
                                                                            Save
                                                                        </a>

                                                                        

                                                                    </div>
                                                                </div>
                                                                

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-8">
                                                    <div className="card rounded-0 border-0">
                                                        <div className="card-title text-center">
                                                            <p><b>Title: </b>{result.volumeInfo.title}</p>
                                                            
                                                        </div>
                                                        <div className="card-title text-center">
                                                            <p><b>Author(s): </b></p>
                                                            {result.volumeInfo.authors.map((author, j)=>{
                                                                if(j === result.volumeInfo.authors.length -1){
                                                                    return(
                                                                        <span key={j}>{author}</span>
                                                                    )
                                                                } else {
                                                                    return(
                                                                        <span key={j}>{author}, </span>
                                                                    )
                                                                }
                                                                
                                                            })}
                                                            
                                                        </div>
                                                        <div className="card-body">
                                                            <p><b>Description: </b>{
                                                                description
                                                                
                                                                }</p>
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
}

export default SearchResults;