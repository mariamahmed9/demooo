import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Form, Card, Button, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSave, faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class CreatePatient extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      nom: '',
      prenom: '',
      sexe: '',
      groupe_sanguin: '',
      birth_place: '',
      birth_date: '',
      nationalite: '',
      profession: '',
      ville: '',
      tel1: '',
      tel2: '',
      whatapp: '',
      adress_1: '',
      adress_2: '',
      contry: '',
      wire: '',
     
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id, nom, prenom, sexe, groupe_sanguin, birth_date, birth_place, nationalite, profession, adress_1, ville, tel1, tel2, whatapp, adress_2, contry, wire} = this.state;

    axios.post('/patients', { id, nom, prenom, sexe, groupe_sanguin, birth_date, birth_place, nationalite, profession, adress_1, ville, tel1, tel2, whatapp, adress_2, contry, wire})
      .then((result) => {
        this.props.history.push("/")
      });
  }


  PatientListe = () => {
    return this.props.history.push("/");
  };

  render() {
    const { id, nom, prenom, sexe, groupe_sanguin, birth_date, birth_place, nationalite, profession, adress_1, ville, tel1, tel2, whatapp, adress_2, contry, wire } = this.state;
    return (
      <div class="container">
        <div className="main-footer">
          <div class="card card-success " style={{ "width": "90%", "height": "80%", "margin": "auto" }}>
            <div class="card-header ">
              <FontAwesomeIcon icon={faPlusSquare} />  Gestion des Patients
          </div>
            <div class="card-body">

              <form onSubmit={this.onSubmit}>
                <Container>
                  <Col className={"border border-white "}>
                    <Row>
                      <Col>
                        <div class="form-group">
                          <label for="isbn">Code:</label>
                          <input style={{ "width": "220px", "margin": "1px", "padding": "10px" }}
                            type="text" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="Code" />
                        </div>

                        <div class="form-group">
                          <label for="isbn">Nom:</label>
                          <input style={{ "width": "220px", "margin": "1px", "padding": "10px" }}
                            type="text" class="form-control" name="nom" value={nom} onChange={this.onChange} placeholder="Nom" />
                        </div>
                        <div class="form-group">
                          <label for="title">Prenom:</label>
                          <input style={{ "width": "220px", "margin": "1px", "padding": "10px" }}
                            type="text" class="form-control" name="prenom" value={prenom} onChange={this.onChange} placeholder="Prenom" />
                        </div>
                      </Col>
                      <Col>
                        <Col>

                        </Col>
                        <Col>

                          <Col>
                            <img className={" border border-dark border border-white bg-white "} src={require('../image.PNG')} style={{ "width": "200px", "margin": "5Opx" }} />
                          </Col>

                          { /* <input type="file" onChange={this.FileChange}  style={{ "width": "120px", "margin": "1px", "padding": "10px" }} size="20px"/>*/}

                          <Button size="sm" variant="info" type="upload" onClick={this.fileUpload}>
                            Browser
                                             </Button>{' '}
                          <Button style={{ "width": "50px", "margin": "29px", "padding": "10px" }} size="20px" variant="outline-danger" onClick={this.deleteImage}><FontAwesomeIcon icon={faTrash} /></Button>

                        </Col>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={"border border-white "}>
                    <Row>
                      <Form.Group >
                        <Form.Label>Groupe Sanguin</Form.Label>
                        <Form.Control as="select"
                          style={{ "width": "300px", "margin": "1px", "padding": "10px", "marginRight": "20px" }}
                          onChange={this.onChange}
                          name="groupe_sanguin" value={groupe_sanguin}
                          className={" border bg-white text-dark"}>
                          {/*  {this.state.groupe_sanguins.map(groupe_sanguin =>
                            <option key={groupe_sanguin.value} value={groupe_sanguin.value}>
                              {groupe_sanguin.display}
                            </option>
                          )}*/}

                        </Form.Control>
                      </Form.Group>

                      <Form.Group >
                        <Form.Label>Sexe</Form.Label>
                        <Form.Control as="select"
                          style={{ "width": "300px", "margin": "0px", "padding": "10px", "marginRight": "11px" }}
                          onChange={this.onChange}
                          name="sexe" value={sexe}
                          className={" border bg-white text-dark"}>

                          {/* {this.state.sexes.map(sexe =>
                            <option key={sexe.value} value={sexe.value}>
                              {sexe.display}
                            </option>
                          )}*/}

                        </Form.Control>
                      </Form.Group>
                    </Row>
                    <Row>
                      <div class="form-group">
                        <label for="isbn">Date de Naissance:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="date" class="form-control" name="birth_date" value={birth_date} onChange={this.onChange} placeholder="Date de Naissance:" />
                      </div>

                      <div class="form-group">
                        <label for="isbn">Lieu de Naissance:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginleft": "200px", "marginRight": "11px" }}
                          type="text" class="form-control" name="birth_place" value={birth_place} onChange={this.onChange} placeholder="Lieu de Naissance:" />
                      </div>


                      <div class="form-group">
                        <label for="isbn">Nationalite:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="text" class="form-control" name="nationalite" value={nationalite} onChange={this.onChange} placeholder="Nationalite" />
                      </div>
                      <div class="form-group">
                        <label for="isbn">Profession:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "6px" }}
                          type="text" class="form-control" name="profession" value={profession} onChange={this.onChange} placeholder="Profession" />
                      </div>
                    </Row>

                    <Row>
                      <div class="form-group">
                        <label for="author">Ville:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="text" class="form-control" name="ville" value={ville} onChange={this.onChange} placeholder="Ville" />
                      </div>
                      <div class="form-group">
                        <label for="published_date">Telephone 1:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="text" class="form-control" name="tel1" value={tel1} onChange={this.onChange} />
                      </div>
                      <div class="form-group">
                        <label for="published_date">Telephone 2:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="text" class="form-control" name="tel2" value={tel2} onChange={this.onChange} />
                      </div>

                      <div class="form-group">
                        <label for="published_date">Whatapp:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "6px" }}
                          type="text" class="form-control" name="whatapp" value={whatapp} onChange={this.onChange} />
                      </div>


                    </Row>
                    <Row>
                      <div class="form-group">
                        <label for="isbn">Pays:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="text" class="form-control" name="contry" value={contry} onChange={this.onChange} />
                      </div>
                      <div class="form-group">
                        <label for="isbn">Were:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="text" class="form-control" name="wire" value={wire} onChange={this.onChange} />
                      </div>


                      <div class="form-group">
                        <label for="isbn">Adress 1:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "5px" }}
                          type="text" class="form-control" name="adress_1" value={adress_1} onChange={this.onChange} placeholder="Adress 1" />
                      </div>

                      <div class="form-group">
                        <label for="publisher">Adress 2:</label>
                        <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                          type="adress_2" class="form-control" name="adress_2" value={adress_2} onChange={this.onChange} placeholder="Address 2" />
                      </div>
                    </Row>
                  </Col>
                  <Card.Footer style={{ "textAlign": "right" }}>
                    <button type="submit" class="btn btn-success"><FontAwesomeIcon icon={faSave} /> Enregister</button>{' '}
                    <Button size="sm" variant="info" type="button" onClick={this.PatientListe.bind()}>
                      <FontAwesomeIcon icon={faList} /> liste des Patients
                            </Button>
                  </Card.Footer>
                </Container>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePatient;
