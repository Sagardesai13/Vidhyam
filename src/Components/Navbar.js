import React from 'react';
import '../css/bootstrap.css'
import '../css/style.css'


export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-gradient-secondary pt-3">
                <div className="container-fluid">
                    <h1><a className="navbar-brand" href="/">Vidhyam
                        <span>Education</span>
                    </a></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="fas fa-bars" style={{'color':'#fff', 'font-size':'28px'}}></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item mx-xl-4 mx-lg-3 my-lg-0 my-3">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#contact">Contact Us</a>
                            </li>
                            <li className="nav-item mx-xl-4 mx-lg-3 my-lg-0 my-3">
                                <a className="nav-link" href="/">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}