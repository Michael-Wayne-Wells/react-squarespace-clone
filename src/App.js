import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TeamPage from './components/TeamPage';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  const pageStyle = {
    "background-color":"#adadad",
    "border-bottom": "3px inset"
  }
  return (
    <div className="App" style={pageStyle}>
      <Header/>
      <Switch>
        <Route path='/team' component={TeamPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
