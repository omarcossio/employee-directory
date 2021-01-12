import React, { Component } from "react";
import API from "../utils/API";
import ResultPage from "./ResultPage";


class Employees extends Component {
    state = {
        results: []
    };


    getEmployees() {
        API.allUsers()
            .then(results => {
                if (results !== null && results !== "") {
                    this.setState({ results: results.data.data })
                    console.log("**YAY! Results were added to the log**");

                }
                else {
                    console.log("No results received from API");
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.results.map(result => (
                    <ResultPage
                    result={result}
                    key={result.id.value}
                    /*
                     picture={result.picture.medium}
                     firstName={result.name.first}
                     lastName={result.name.last}
                     email={result.email}
                     number={result.phone}
                    */
                    />
                ))}
            </div>
        )
    }
}

export default Employees;


