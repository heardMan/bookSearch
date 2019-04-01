import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
    render() {
        //console.log(this.props.match.url);
        const page = this.props.match.url;
        let text;
        if(page === "/Saved"){
            return (
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="card rounded-0 m-3 san-marino card-shadow">
                            <div className="card-body text-white">
                                <h1>Saved Books</h1>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="row">
                <div className="col-12 text-center">
                    <div className="card rounded-0 m-3 san-marino  card-shadow">
                        <div className="card-body text-white">
                            <h1>Welcome to Book Search</h1>
                            <h4>Let's find some new books!</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;