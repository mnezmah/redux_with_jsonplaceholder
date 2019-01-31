import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="header">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Redux Crash course</p>
          </header>
          <div className="App">
            <PostForm />
            <Posts />
          </div>  
        </div>
      </Provider>
    );
  }
}

export default App;
