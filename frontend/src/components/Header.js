import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link"> <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Home</Link>
                    </li>
                   
                </ul>
                {/* SEARCH FORM */}
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                <li className="nav-item d-none d-sm-inline-block">
                <Link to="/login" className="nav-link"> <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Login</Link>
                        
                    </li>
                    
                </ul>
            </nav>
        </div>

    )
}
