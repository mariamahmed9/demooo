import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList ,faPlusSquare } from '@fortawesome/free-solid-svg-icons';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import './Style.css';
import { Card, Row, Image, Col,Button } from 'react-bootstrap';



class ShowPatient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {},
    };
  }

  componentDidMount() {
    axios.get('/patients/' + this.props.match.params.id)
      .then(res => {
        this.setState({ patient: res.data });
        console.log(this.state.patient);
      });

     
  }

  delete(id) {
    console.log(id);
    axios.delete('/patients/' + id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  PatientListe = () => {
    return this.props.history.push("/");
  };

  
  render() {
    return (
      <div class="container">
         <div className="main-footer">
        <div class="card card-success" style={{ "width": "100%", "height": "80%", "margin": "auto" }}>
          <div class="card-header">
            <h3 >
              Dossier Medical du Patient
            </h3>
          </div>
          <div class="card-body">
          
          <Col className={"border border-white "} style={{ "width": "90%", "height": "60%" }}>
                <Row>
                  <Col style={{ "margin":"auto" }}>
                    <dl>
                      <dt>Nom:</dt>
                      <dd>{this.state.patient.nom}</dd>
                      <dt>Prenom:</dt>
                      <dd>{this.state.patient.prenom}</dd>
                      
                      <dt>Date de Naissannce:</dt>
                      <dd>{this.state.patient.birth_date}</dd>
                    </dl>
                  </Col>
                  <Col>
                    <div style={{ "width": "100%", "height": "70%", "marginRight": "(50%", "marginLeft": "60%" }}>
                      <Image src={require('../image.PNG')} roundedCircle width="200" height="200" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Card className="pinf1" style={{ "width": "90%", "margin": "auto" }} >

                <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                  <TabList>
                    <Tab> Fiche</Tab>
                    <Tab> Consultations</Tab>
                    <Tab> Biologies</Tab>
                    <Tab> Radios</Tab>
                    
                  </TabList>
                  <TabPanel> Hello <br></br><br></br><br></br><br></br>  </TabPanel>
                  <TabPanel> Les Consultations <br></br><br></br><br></br><br></br>  </TabPanel>
                  <TabPanel> Les Biologies<br></br><br></br><br></br><br></br>  </TabPanel>
                  <TabPanel> Les Radios<br></br><br></br><br></br><br></br>  </TabPanel>
                </Tabs>


              </Card>


           
             
            

            <Card.Footer style={{ "textAlign": "right" }}>
              <Link to={`/edit/${this.state.patient.id}`} class="btn btn-success">Edit</Link>&nbsp;{' '}
              <button onClick={this.delete.bind(this, this.state.patient.id)} class="btn btn-danger">Delete</button>{' '}
              <Button size="sm" variant="info" type="button" onClick={this.PatientListe.bind()}>
                <FontAwesomeIcon icon={faList} /> liste des Patients
                            </Button>{' '}
              
            </Card.Footer>

          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ShowPatient;
