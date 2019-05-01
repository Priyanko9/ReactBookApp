import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import {getAll,update} from './BooksAPI.js';
import {Link } from 'react-router-dom';

class App extends Component {
  state={
    books:[]
  };
  
  //call the update api with the changed state of the book
  changeState=(shelf,book)=>{
    update(book,shelf).then((response)=>{
      this.setState((state)=>({
        books:state.books.map(b=>{
          if(book.id===b.id){
            b.shelf=shelf;
          }
          return b;
        })
      }));
    });
  }
  //Get all the books
  componentDidMount(){
    getAll().then((response)=>{
      this.setState((state)=>({
        books:response
      }));
    });
  }
  
  render() {
    return (
      <div className="App">
        <header>
        <Link to={{
            pathname: '/search',
            state: {
              booklist:this.state.books
              
            }
          }}><i className="material-icons customSearch">search</i></Link>
        </header>
        <Main booklist={this.state.books} changeState={(shelf,book)=>this.changeState(shelf,book)}/>
        
      </div>
    );
  }
}

export default App;
