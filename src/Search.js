import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import BookTemplate from './Booktemplate.js'
import {search,update,get} from './BooksAPI.js';


class Search extends Component {

  state={
    searchedBooks:[]
  }
  //call the update api method
  changeState=(shelf,book)=>{
    update(book,shelf).then((response)=>{
      this.setState((state)=>({
        searchedBooks:state.searchedBooks.map(b=>{
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
    if(!value){
      this.setState((state)=>({
        searchedBooks:[]
      }));
    } else {
      if(this.timeout){
        clearTimeout(this.timeout);
      }
      this.timeout=setTimeout(()=>{
        this.setState((state)=>({
          searchedBooks:[]
        }));
        search(value).then((response)=>{
          if(response && !response.error){
          response.forEach(book=>{
              get(book.id).then(res=>{
                  book.shelf=res.shelf;
                  this.emptyResult=false;
                  if(this.state.searchedBooks.findIndex(b=>book.id===b.id) < 0){
                    this.setState((state)=>({
                      searchedBooks:state.searchedBooks.concat(book)
                    }));
                  }
              });
          })
          } else if (response.error){
            if(response.error==="empty query"){
              this.emptyResult=true;
            }
            this.setState((state)=>({
              searchedBooks:[]
            }));
          } else {
            this.emptyResult=false;
            this.setState((state)=>({
              searchedBooks:[]
            }));
          }
        });
      },500)
    }
    
  }
  
  render() {
    return (
      <div className="Main">
        <div className="searchBox">
          <input type="text" id="searchbox" onKeyUp={this.search}/>
        </div>
        <Link to={{
            pathname: '/'
          }}>Home Page</Link>
        {this.emptyResult && <div className="emptyResults">There are no result for this query</div>}
          <div className="shelf">
          { this.state.searchedBooks && this.state.searchedBooks.length > 0  && this.state.searchedBooks.map(book => <BookTemplate key={book.id}
                changeState={(shelf,book)=>this.changeState(shelf,book)} booksToShow={book}/>) }
          </div>
      </div>
    );
  }
}

export default Search;
