import React from "react";

function ResultPage({result}) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={result.lastName} src={result.picture} />
            </div>
            <div className="information">
                <ul>
                    <li>
                        <strong>Name: </strong> {result.firstName} {result.lastName}
                    </li>
                    <li>
                        <strong>Email: </strong> {result.email}
                    </li>
                    <li>
                        <strong>Phone #: </strong> {result.number}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResultPage;