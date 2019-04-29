import React, { Component } from 'react';

//Book Template for holding the information of a book
class BookTemplate extends Component {
  allState=[
    "read","wantToRead","currentlyReading","none"
  ];
  constructor(props){
    super(props);
  }
  // change the state of the book and call the callback with the book
  changeState=(event)=>{
    const state=event.target.textContent;
    this.props.booksToShow.shelf=state;
    this.props.changeState(this.props.booksToShow);
  }
  // display the current state of the particular book
  displaylistState=(event)=>{
    let list=event.currentTarget.children;
    list[1].style.display="flex";
    list[1].style["flex-direction"]="column";
  }
  //show all the different shelf options for the move to section
  showAllStates=(event)=>{
    let list=event.currentTarget.parentElement.parentElement.children;
    list[1].style.display="block";
  }
  render() {
    const statesToSelect=this.allState.filter((state)=>{
        return state!==this.props.booksToShow.shelf
    });
    let listState=document.getElementsByClassName("listState");
    if(listState){
      [...listState].forEach((eachbook)=>{
        eachbook.style.display="none";
      })
    }
    return (
      <div className="bookTemplate">
        <div className="thumbnail">
            <img src={this.props.booksToShow.imageLinks.smallThumbnail}></img>
            <span className="options"></span>
        </div>
        <div className="statelist" onClick={this.displaylistState}>
          <div className="indicator"></div>
          <div className="listState">
            <ul>
              <li onClick={this.showAllStates} className="mouseicon">Move To ></li>
              { this.props.booksToShow.shelf && <li className="selectedState">{this.props.booksToShow.shelf}</li>}
            </ul>
            <div className="movetoSection">
              <ul>
                {statesToSelect && statesToSelect.map(state=><li key={state} className="mouseicon"
                onClick={(event)=>this.props.changeState(event.target.textContent,this.props.booksToShow)}>{state}</li>)}
              </ul>
          </div>
          </div>
        </div>
        <div className="title">{this.props.booksToShow.title}</div>
        {this.props.booksToShow.authors && this.props.booksToShow.authors.map(author=>
                <div key={author} className="author">{author}</div>
        )}
      </div>
    );
  }
}

export default BookTemplate;