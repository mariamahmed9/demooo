import React, { Component } from 'react'
import { Link } from 'react-router-dom';




export default class Menu extends Component {

    
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/logo4.jpeg" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Dossiers Médicaux🧪</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/logo4.jpeg" className="img-circle elevation-2" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Dossiers Médicaux🧪</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item has-treeview">
                        <a href="#" className="nav-link">
                
                <i className="nav-icon fas fa-edit"  />
                <p>
                   Gestion des patients
                <i className="fas fa-angle-left right" />
                </p>
            </a>
            <ul className="nav nav-treeview">
                
                <li className="nav-item">
                    <Link to="/create" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span><p>Patients</p>
                    </Link>
                </li>
                <li className="nav-item">
               
                    <Link to="/" className="nav-link" >
                        <i className="far fa-circle nav-icon" />
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span><p>Historiques</p>
                    </Link>
                </li>
                
            </ul>
        </li>
              <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p>
                Consultations & Contrôles
                <i className="fas fa-angle-left right" />
                </p>
            </a>
            <ul className="nav nav-treeview">
                <li className="nav-item">
                    <Link to="/addcons" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span><p>Consultations & Contrôles</p>
                    </Link>
                </li>
                <li className="nav-item">
                   <Link to="/listcons" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span><p>Historiques</p>
                    </Link>
                </li>
                
                
            </ul>
        </li>
        
        
       
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
            </div>
        )
    }
}
