import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component{
    state = {
        results:[]
    }
    updateResult = (query)=>{
        query = query.trim();
        if(query.length !== 0 || query === ' '){
            BooksAPI.search(query)
            .then((books)=>{
                if(!books.error)
                {
                    this.setState({
                        results:books
                    })
                }
                else{
                    this.setState({
                        results:[]
                    })
                }
            })
        }
        else{
            this.setState({
                results:[]
            })
        }
    }
    render(){
        console.log(this.props);
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">
                            Close
                        </button>
                    </Link> 
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(e)=>this.updateResult(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results.map((book)=>(
                            <li key={book.id}>
                                <Book book={book}
                                updateShelves={this.props.updateShelves} />
                            </li>
                        ))}
                        
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBook