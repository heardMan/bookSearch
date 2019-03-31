import React, {Component} from "react";
import API from "../../Ultilities/API";

class SavedBooksComponent extends Component{
    state={
        savedresults:[]
    };
    componentDidMount(){
        this.getSavedBooks();
        
    }
    getSavedBooks = ()=>{
        API.getBooks()
              .then(resp=>{
                  console.log(resp.data);
                  this.setState({
                    savedresults: resp.data
                  })
              })
              .catch(err=>console.log(err));
      }
    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {this.state.savedresults.map((elem, i) => {
                            return(
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <img src={elem.image} alt=""/>
                                            <p>{elem.title}</p>
                                            <p>{elem.description}</p>
                                            
                                            <a href={elem.link}>Preview</a>
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