// == Import
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Route, Switch, Redirect } from 'react-router-dom';

// Composants
import NotFound from 'src/components/NotFound';

import './styles.scss';

const BASE_URL = 'http://localhost:3333';

// == Composant
const App = () => {

  return (
    <div className="MonProjet">
      <Switch>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;