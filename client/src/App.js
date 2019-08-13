import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import library that binds react-redux together
//provider is a react component that is a store that holds our data and wraps around everything.
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';



class App extends Component {
  render() {
    return (
      // Provider will take in our store
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            {/* if you dont do it exact it will show multiple routes on the same page */}
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
