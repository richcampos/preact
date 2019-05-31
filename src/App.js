import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import BadgeNew from './pages/BadgeNew'
import Layout from './components/Layout'
import Badges from './pages/Badges'
import BadgesNew from './pages/BadgeNew'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgesNew}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
