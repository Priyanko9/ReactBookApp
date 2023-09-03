# ReactBookApp
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is basically a bookmark application where you can change the state of the books.Here you can categorize the books among wantToRead,read and currentlyReading view.Also one can search for a particular view in the search page and the change the state of the book so that it is reflected in the main page in that particular shelf.
The app is live at https://bookappreact.onrender.com/


### `Install`

Install all the required node modules using npm install

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### components
1.App-This is the component which hold the main component and the link to search component.This component gets loaded on default route.

2.Main-This component shows all the books with status of the books as well as other information of the books.

3.Search-This components is used for searching for a particular book and displaying the list of books accordingly.

4.BookTemplate-This component holds the information of a particular book along with status and all the available options.

5.RouteNotExistComponent-This component gets loaded when a route does not exist

### API calls

BooksAPI.js contains all the api calls


