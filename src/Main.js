import React, { Component } from 'react';
import BookTemplate from './Booktemplate.js'

class Main extends Component {

  render() {
      //separate books acc. to shelves
      const currentlyReadingBooks=this.props.booklist.filter((book)=>{
          return book.shelf==="currentlyReading"
      })
      const wantToReadBooks=this.props.booklist.filter((book)=>{
        return book.shelf==="wantToRead"
      })
      const readBooks=this.props.booklist.filter((book)=>{
        return book.shelf==="read"
      })

    return (
      <div className="Main">
            <h1>Currently Reading</h1>
            <div className="shelf">
              { currentlyReadingBooks && currentlyReadingBooks.map(book => <BookTemplate key={book.id}
               changeState={(shelf,book)=>this.props.changeState(shelf,book)} booksToShow={book}/>) }
            </div>
            <h1>Want To Read</h1>
            <div className="shelf">
              {  wantToReadBooks && wantToReadBooks.map(book => <BookTemplate key={book.id} changeState={(shelf,book)=>this.props.changeState(shelf,book)}
              booksToShow={book}/>)  }
            </div>
            <h1>Read</h1>
            <div className="shelf">
              {   readBooks && readBooks.map(book => <BookTemplate key={book.id} 
              changeState={(shelf,book)=>this.props.changeState(shelf,book)} booksToShow={book}/>) }
            </div>
      </div>
    );
  }
}

export default Main;
