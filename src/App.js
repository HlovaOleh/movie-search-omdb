import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Watched } from './components/Watched';
import { Watchlist } from './components/Watchlist';
import { Header } from './components/Header';
import { Add } from './components/Add';
import './App.css';

import { GLobalProvider } from './context/GlobalState';

function App() {
  return (
    <GLobalProvider>
      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Watchlist />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>

        </Switch>
      </Router>
    </GLobalProvider>
  );
}

export default App;
