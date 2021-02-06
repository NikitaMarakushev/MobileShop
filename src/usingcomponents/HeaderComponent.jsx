import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function HeaderComponent() {
    return (
        <div className="container bg-info header">
            <div className="row">
                <div className="col-lg-2">Itme1</div>
                <div className="col-lg-2">Itme2</div>
                <div className="col-lg-2">Itme3</div>
            </div>
        </div>
    )
}

export default HeaderComponent
