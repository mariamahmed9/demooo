import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default class Analyse extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">

                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-12">
                                    {/* jquery validation */}
                                    <div className="card card-success" style={{ "width": "50%", "height": "90%", "margin": "auto" }}>
                                        <div className="card-header">
                                        <FontAwesomeIcon icon={faPlusSquare} /> Gestions des Analyses
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form role="form" id="quickForm">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Code</label>
                                                    <input type="text" name="id" className="form-control" id="exampleInputEmail1" placeholder="Code" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Nom</label>
                                                    <input type="text" name="Prenom" className="form-control" id="exampleInputPassword1" placeholder="Nom" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Date</label>
                                                    <input type="date" name="Prenom" className="form-control" id="exampleInputPassword1" placeholder="Date" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Titre</label>
                                                    <input type="text" name="Prenom" className="form-control" id="exampleInputPassword1" placeholder="Titre" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Observation</label>
                                                    <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>

                                                </div>


                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-success">Enregister</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/*/.col (left) */}
                                {/* right column */}
                                <div className="col-md-6">
                                </div>
                                {/*/.col (right) */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
            </div>

        )
    }
}
