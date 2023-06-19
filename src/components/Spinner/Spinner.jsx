//spinner component to be used in the loading state

import React from 'react';

const Spinner = () => {
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </div>
        </div>
        </div>
    )
    }

export default Spinner;