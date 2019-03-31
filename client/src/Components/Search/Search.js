import React, { Component } from "react";

class SearchComponent extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-12 text-center">

                    <div className="card m-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label >Search</label>
                                    <input value={this.props.state.query} onChange={this.props.handleInputChange} type="text" className="form-control" name="query" id="query" placeholder="Find a Book"/>
                                 </div>

                                    <button onClick={this.props.handleFormSubmit} name="bookSearch" type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
                );

    }

}

export default SearchComponent;