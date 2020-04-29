import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

// Componentes
import Actores from './components/Actores';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Actores} />
      </Switch>
    </Router>
  );
}

export default App;
