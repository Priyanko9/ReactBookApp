import React, { Component } from 'react';
import './App.css';
import Main from './main.js';
import {getAll,update} from './BooksAPI.js';
import {Link } from 'react-router-dom';

class RouteNotExistComponent extends Component {
  
  render() {
    return (
      <div className="errorPage">
          Page Does not exist
      </div>
    );
  }
}
export default RouteNotExistComponent;
