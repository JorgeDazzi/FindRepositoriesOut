import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <form onSubmit={(e)=>{e.preventDefault();}}>
                    <input type="text" id="term" placeholder="search here Repositories in Github"/>
                    <input type="submit" value="Search" className="searchBtn"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;