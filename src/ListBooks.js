import React, { Component} from 'react'
import Prototypes from 'prop-types'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class ListBooks extends Component{
    render(){
        const currentlyReading  = this.props.books.filter((book)=>book.shelf === 'currentlyReading');
        const wantToRead  = this.props.books.filter((book)=>book.shelf === 'wantToRead')
        const read  = this.props.books.filter((book)=>book.shelf === 'read')
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            name='Currently Reading'
                            booksInShelf={currentlyReading}
                            updateShelves={this.props.updateShelves}
                        />
                        <BookShelf
                            name='Want to Read'
                            booksInShelf={wantToRead}
                            updateShelves={this.props.updateShelves}
                        />
                        <BookShelf
                            name='Read'
                            booksInShelf={read}
                            updateShelves={this.props.updateShelves}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>
                            Add a book
                        </button>
                    </Link> 
                </div>
            </div>
        )
    }
}

export default ListBooks