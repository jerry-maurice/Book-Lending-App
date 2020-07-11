import React, {Component} from 'react'

class Book extends Component{
    render(){
        //let image = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail?this.props.book.imageLinks.thumbnail:null}")` }}></div>
                <div className="book-shelf-changer">
                    <select value={this.props.book.shelf} onChange={(event)=>this.props.updateShelves(this.props.book,event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book