import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare ,faList} from '@fortawesome/free-solid-svg-icons';

class PatientListe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
  }

  componentDidMount() {
    axios.get('/patients')
      .then(res => {
        this.setState({ patients: res.data });
        console.log(this.state.patients);
      });
    
    const script = document.createElement("script");

    script.src = `js/content2.js`;
    script.async = true;

    document.body.appendChild(script);
  }

  CreatePatient = () => {
    return this.props.history.push("/create");
  };

  CreateOrdonnance = () => {
    return this.props.history.push("/createordo");
  };

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

          <div class="container">
            <div className="row">
              <div className="col-12">
                
                  <div class="card card-success" style={{ "width": "100%", "height": "100%", "margin": "auto" }}>
                    <div class="card-header">
                      
                    <FontAwesomeIcon icon={faList} /> Gestion des patients
           
                    </div>
                    <div class="card-body">

                      <table class="table table-stripe" id="example2" className="table table-bordered table-hover" >
                        <thead>
                          <tr>

                            <th>Code</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Date de Naissance</th>
                            <th>Lieu de Naissance</th>

                          </tr>
                        </thead>
                        <tbody>
                          {this.state.patients.map(c =>
                            <tr>
                              <td><Link to={`/show/${c.id}`}>{c.id}</Link></td>
                              <td><Link to={`/show/${c.id}`}>{c.nom}</Link></td>
                              <td>{c.prenom}</td>
                              <td>{c.birth_date}</td>
                              <td>{c.birth_place}</td>

                            </tr>


                          )}


                        </tbody>


                        <Button size="sm" variant="info" type="button" onClick={this.CreatePatient.bind()}>
                          <FontAwesomeIcon icon={faPlusSquare} /> Ajouter Patient
                            </Button>

                      </table>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientListe;
