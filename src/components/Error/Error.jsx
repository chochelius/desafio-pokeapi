import React from 'react';

const Error = ({ error }) => {
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
            <h1 className="mt-5">
                Error: {error.message}
            </h1>
            </div>
        </div>
        </div>
    )
}

export default Error;