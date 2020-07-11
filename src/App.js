import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import SearchBook from './SearchBook'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      console.log(books)
      this.setState(()=>({
        books
      }))
    })
  }

  updateBookInShelve = (book, shelf)=>{
    book.shelf = shelf
    this.setState(state=>({
      books:state.books.filter(b=>b.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/' 
          render = {()=>(
            <ListBooks 
                books={this.state.books}
                updateShelves={this.updateBookInShelve}/>
            )} 
          />
        <Route
          exact path="/search"
          render={()=>(
            <SearchBook
              updateShelves={this.updateBookInShelve}
            />
            )}
          />
      </div>
    )
  }
}

export default BooksApp
