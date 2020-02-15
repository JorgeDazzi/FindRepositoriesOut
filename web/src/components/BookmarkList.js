import React, { Component } from 'react';
import BookmarkItem from './BookmarkItem';

class Bookmarks extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.books.map(
                        repo => <BookmarkItem 
                                    repo={repo} key={repo.id} 
                                    /*deleteFromBookmark={(id)=>this.props.deleteFromBookmark(id)}*//>
                    )
                }
            </div>
        );
    }
}

export default Bookmarks;