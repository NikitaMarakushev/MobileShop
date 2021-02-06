import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import headerLogo from '../media/header_logo.svg';

function HeaderComponent() {
    return (
        <div className="container bg-info header">
            <div className="d-flex row">
                <div className="d-flex col-2 flex-row w-100 justify-content-between p-2">
                    <div className="d-flex col-lg-15 align-items-center">
                        <a href="" className="text-light">Itme1</a>
                    </div>
                    <div className="d-flex col-lg-15 align-items-center">
                        <a href="" className="text-light"> Itme2</a>
                    </div>
                    <div className="d-flex col-lg-15 align-items-center">
                        <a href="" className="text-light">Itme2</a>
                    </div>
                </div>
                <div className="ml-auto p-2 flex-end">
                    <img className="header_img "src={headerLogo} alt="bitten logotype"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
