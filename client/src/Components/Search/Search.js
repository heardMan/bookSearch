import React, { Component } from "react";

class SearchComponent extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-12 text-center">

                    <div className="card border-0 rounded-0 m-3 san-marino card-shadow">
                        <div className="card-body">
                            <form>
                                <div className="form-group border-bottom">
                                    {/* <label >Search</label> */}
                                    <input value={this.props.state.query} onChange={this.props.handleInputChange} type="text" className="form-control rouded-0 border-0 text-center text-white san-marino" name="query" id="query" placeholder="Find some Book"/>
                                 </div>

                                    <button onClick={this.props.handleFormSubmit} name="bookSearch" type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
                );

    }

}

export default SearchComponent;