import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default class CreateConsultation extends Component {


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
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
                                        <FontAwesomeIcon icon={faPlusSquare} /> Gestions des Consultations & Contrôles
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form role="form" id="quickForm">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label for="isbn">Code</label>
                                                    <input type="text" name="id" className="form-control"  onChange={this.onChange} placeholder="Code" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="isbn">Nom</label>
                                                    <input type="text" name="nom" className="form-control"  onChange={this.onChange} placeholder="Nom" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Observation</label>
                                                    <textarea  name="Observation"class="form-control" rows="3" onChange={this.onChange} placeholder="Enter ..."></textarea>

                                                </div>
                                                <div className="form-group">
                                                    <label for="isbn">Date</label>
                                                    <input type="date" name="date" className="form-control"  onChange={this.onChange} placeholder="Date" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="isbn">Duration</label>
                                                    <input type="text" name="duration" className="form-control"  onChange={this.onChange} placeholder="Duration" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="isbn">Cost</label>
                                                    <input type="text" name="cost" className="form-control"  onChange={this.onChange} placeholder="Cost" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="isbn">Diagnostic</label>
                                                    <input type="text" name="diagnostic" className="form-control"  onChange={this.onChange} placeholder="Diagnostic" />
                                                </div>

                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-success">Enregistrer</button>
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
