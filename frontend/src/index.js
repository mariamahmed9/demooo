import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PatientListe from './components/Patient/PatientListe';
import './App.css';
import EditPatient from './components/Patient/EditPatient';
import CreatePatient from './components/Patient/CreatePatient';
import ShowPatient from './components/Patient/ShowPatient';
import Header from './components/Header';
import Menu from './components/Menu';
import Footerr from './components/Footerr';
import AnalyseListe from './components/Analyse/AnalyseListe';
import ConsultationList from './components/Consultation/ConsultationList';
import Analyse from './components/Analyse/Analyse';
import CreateConsultation from './components/Consultation/CreateConsultation';

ReactDOM.render(
  <Router>
    <Header/>
        <Menu/>
      <div>
        <Route exact path='/' component={PatientListe} />
        <Route path='/edit/:id' component={EditPatient} />
        <Route path='/create' component={CreatePatient} />
        <Route path='/show/:id' component={ShowPatient} />
        <Route path='/listana' component={AnalyseListe} />
        <Route path='/listcons' component={ConsultationList} />
        <Route path='/createana' component={Analyse} />
        <Route path='/addcons' component={CreateConsultation} />
       
        
        

      </div>
      <Footerr/>
  </Router>,
  document.getElementById('root')
);
