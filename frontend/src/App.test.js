import React from 'react';
import ReactDOM from 'react-dom';
import PatientListe from './components/Patient/PatientListe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PatientListe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
