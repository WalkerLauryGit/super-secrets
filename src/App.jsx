import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Form from './components/Form';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/' />
                Send
              </li>
              <li>
                <Link to='/receive' />
                Receive
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <Form />
            </Route>
            <Route path='/receive'>
              <Receive />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
