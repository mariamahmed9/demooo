import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';



export default class AnalyseListe extends Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = `js/content2.js`;
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    
                                </div>

                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div class="card card-success" style={{ "width": "100%", "height": "100%", "margin": "auto" }}>
                                    <div className="card-header">
                                    <FontAwesomeIcon icon={faList} />Gestion des Analyses
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Nom</th>
                                                    <th>Date</th>
                                                    <th>Titre</th>
                                                    <th>Observation(s)</th>
                                                    <th>Actions</th>
                                                    
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                               
                                            
                                           
                                                
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                                
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
            </div>

        )
    }
}
