import React, { Component } from 'react';
import axios from 'axios';



import { Form, Card, Button, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTrash , faEdit } from '@fortawesome/free-solid-svg-icons';

class EditPatient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {}
    };
  }

  componentDidMount() {
    axios.get('/patients/' + this.props.match.params.id)
      .then(res => {
        this.setState({ patient: res.data });
        console.log(this.state.patient);
      });
  }

  onChange = (e) => {
    const state = this.state.patient
    state[e.target.name] = e.target.value;
    this.setState({ patient: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id, nom, prenom, sexe, groupe, date, lieu, nationalite, profession, assurance, ville, tel1, tel2, telw, email, medecin_r, medecin_t } = this.state.patient;

    axios.put('/patients/' + this.props.match.params.id, { id, nom, prenom, sexe, groupe, date, lieu, nationalite, profession, assurance, ville, tel1, tel2, telw, email, medecin_r, medecin_t })
      .then((result) => {
        this.props.history.push("/show/" + this.props.match.params.id)
      });
  }

  ShowPatient = () => {
    return this.props.history.push(`/show/${this.state.patient.id}`);
  };

  render() {
    return (
      <div class="container">
        <div className="main-footer">
        <div class="card card-success" style={{ "width": "90%", "height": "80%", "margin": "auto" }}>
          <div class="card-header">
          <FontAwesomeIcon icon={faEdit} /> Modifier Patient
          </div>
          <div class="card-body">

            <form onSubmit={this.onSubmit}>
              <Container>
                <Col className={"border border-white "}>
                  <Row>
                    <Col>
                      <div class="form-group">
                        <label for="name">Code:</label>
                        <input style={{ "width": "220px", "margin": "1px", "padding": "10px" }}
                        type="text" class="form-control" name="id" value={this.state.patient.id} onChange={this.onChange} placeholder="Code" />
                      </div>


                      <div class="form-group">
                        <label for="name">Nom:</label>
                        <input  style={{ "width": "220px", "margin": "1px", "padding": "10px" }}
                        type="text" class="form-control" name="nom" value={this.state.patient.nom} onChange={this.onChange} placeholder="Nom" />
                      </div>

                      <div class="form-group">
                        <label for="title">Prenom:</label>
                        <input style={{ "width": "220px", "margin": "1px", "padding": "10px" }}
                        type="text" class="form-control" name="prenom" value={this.state.patient.prenom} onChange={this.onChange} placeholder="Prenom" />
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
                        <Button style={{ "width": "50px", "margin": "28px", "padding": "10px" }} size="20px" variant="outline-danger" onClick={this.deleteImage}><FontAwesomeIcon icon={faTrash} /></Button>

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
                      name="groupe" value={this.state.patient.groupe}
                      className={" border bg-white text-dark"}>
                      {/*  {this.state.groupes.map(groupe =>
                            <option key={groupe.value} value={groupe.value}>
                              {groupe.display}
                            </option>
                          )}*/}

                    </Form.Control>
                  </Form.Group>

                  <Form.Group >
                    <Form.Label>Sexe</Form.Label>
                    <Form.Control as="select"
                      style={{ "width": "300px", "margin": "0px", "padding": "10px", "marginRight": "11px" }}
                      onChange={this.onChange}
                      name="sexe" value={this.state.patient.sexe}
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
                    <label for="title">Date de Naissance:</label>
                    <input  style={{ "width": "150px", "margin": "1px", "padding": "10px" , "marginRight": "11px"}}
                    type="date" class="form-control" name="birth_date" value={this.state.patient.birth_date} onChange={this.onChange}  />
                  </div>
                  <div class="form-group">
                    <label for="title">Lieu de Naissance:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginleft": "200px", "marginRight": "11px" }}
                    type="text" class="form-control" name="birth_place" value={this.state.patient.birth_place} onChange={this.onChange}  />
                  </div>
                  <div class="form-group">
                    <label for="title">Nationalite:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="nationalite" value={this.state.patient.nationalite} onChange={this.onChange} placeholder="Nationalite" />
                  </div>

                  <div class="form-group">
                    <label for="title">Profession:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px" ,"marginRight": "6px"
                     }}
                    type="text" class="form-control" name="profession" value={this.state.patient.profession} onChange={this.onChange} placeholder="Profession" />
                  </div>
                  </Row>
                  
                  <Row>
                  <div class="form-group">
                    <label for="author">Ville:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="ville" value={this.state.patient.ville} onChange={this.onChange} placeholder="Ville" />
                  </div>
                  <div class="form-group">
                    <label for="published_date">Telephoun 1:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="tel1" value={this.state.patient.tel1} onChange={this.onChange} />
                  </div>
                  <div class="form-group">
                    <label for="published_date">Telephoun 2:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="tel1" value={this.state.patient.tel2} onChange={this.onChange}  />
                  </div>

                  <div class="form-group">
                    <label for="published_date">Telephoun Whatsapp:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "6px" }}
                    type="text" class="form-control" name="whatapp" value={this.state.patient.whatapp} onChange={this.onChange}  />
                  </div>

                 
                  </Row>
                  
                  <Row>
                  <div class="form-group">
                    <label for="name">Pays:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="contry" value={this.state.patient.contry} onChange={this.onChange} />
                  </div>
                  <div class="form-group">
                    <label for="name">Wire:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="wire" value={this.state.patient.wire} onChange={this.onChange}  />
                  </div>

                  <div class="form-group">
                    <label for="description">Adress 1:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "5px" }}
                    type="text" class="form-control" name="adress_1" value={this.state.patient.adress_1} onChange={this.onChange} placeholder="Address 1" />
                  </div>

                  <div class="form-group">
                    <label for="title">Adress 2:</label>
                    <input style={{ "width": "150px", "margin": "1px", "padding": "10px", "marginRight": "11px" }}
                    type="text" class="form-control" name="adress_2" value={this.state.patient.adress_2} onChange={this.onChange} placeholder="Address 2" />
                  </div>
                  </Row>
                </Col>
                <Card.Footer style={{ "textAlign": "right" }}>
                  <button type="submit" class="btn btn-success">Update</button>{' '}
                  <Button size="sm" variant="info" type="button" onClick={this.ShowPatient.bind()}>
                    <FontAwesomeIcon icon={faList} /> Dossier du patient
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

export default EditPatient;
