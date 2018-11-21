import React from 'react';

const Loader = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <i className="fa fa-spinner fa-spin" style={{fontSize: '48px'}}></i>
            </div>
        </div>
    );
};

export default Loader;