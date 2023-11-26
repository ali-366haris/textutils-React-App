import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#213363';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils- Dark mode';
      setTimeout(() => {
        document.body.style.backgroundColor = '#213350';
        document.title = 'Enter Your text now';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "danger");
      document.title = 'TextUtils- light mode';
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" homepage="Home" Abouttext="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Write Your Text here" mode={mode} />
            </Route>
          </Switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;
