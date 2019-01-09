import React, { Component } from 'react';
import { Globalstyle } from './style.js';
import Header from './common/header/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Premium from './pages/premium';
import History from './pages/history';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Globalstyle />
          <Header />
          <BrowserRouter>
          	<div>
          		<Route path = '/' exact component = {Home} />
          		<Route path = '/premium' exact component = {Premium} />
              <Route path = '/history' exact component = {History} />
          	</div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
