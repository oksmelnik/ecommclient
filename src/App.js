import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Products</h1>
        </header>

        <Router>
        <div>
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/" render={ () => <Redirect to="/products" /> } />
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
