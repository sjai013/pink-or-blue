import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
