import React, { Component } from 'react';
import BookTemplate from './booktemplate.js'
import {search,update,get} from './BooksAPI.js';

class Search extends Component {

  state={
    books:[]
  }
  //call the update api method
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
  // search for a particular book and set the correct state of the book using get api method
  search=(event)=>{
    const value=event.target.value;
    if(this.timeout){
      clearTimeout(this.timeout);
    }
    this.timeout=setTimeout(()=>{
      search(value).then((response)=>{
        if(response){
        response.forEach(book=>{
          get(book.id).then(res=>{
               book.shelf=res.shelf;
               this.setState((state)=>({
                  books:state.books.concat(book)
              }));
          });
        })
      }
      });
    },300)
  }
  render() {
    return (
      <div className="Main">
        <div className="searchBox">
          <input type="text" id="searchbox" onKeyUp={this.search}/>
        </div>
        <div className="shelf">
        { this.state.books && this.state.books.length > 0  && this.state.books.map(book => <BookTemplate key={book.id}
               changeState={(shelf,book)=>this.changeState(shelf,book)} booksToShow={book}/>) }
        </div>
      </div>
    );
  }
}

export default Search;