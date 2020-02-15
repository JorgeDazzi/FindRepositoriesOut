import React from 'react';
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import BookmarkList from "./components/BookmarkList";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      books:[],
      repositories: [],
      api:"http://localhost:8081/"
    }
  }

  componentDidMount(){
    this.getBookmark()
    .then(data => this.setState({books:data}));
  }

  /**
   * Search repositories that match what you desires
   */
  searchRepoByTerm = async (term)=>{
    if(term != null){
      const url = `${this.state.api}repo/search/${term}`;
      let response  = await fetch(url);
      let data = (await response).json();
        data.then(
          list => this.setState({repositories:list.items})
        );
    }
  }

  /*
    Fetch in API the Bookmark List Object
    Method: GET
  */
  getBookmark = async () => {
    const url = `${this.state.api}bookmark`;
    let response  = fetch(url);
    const data = (await response).json();
    return await data;
  }
  /* 
    Send the ID to API, in order to add/push it in Bookmark
    Method: GET
  */
  addToBookmark = async (id)=>{ 
    const url = `${this.state.api}bookmark/`;

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", id); 

    let response  = fetch(
                      url,
                      {
                        method:"POST",
                        body: urlencoded,
                      });
    const data = (await response).json();
    data.then(
      ready => this.getBookmark().then(data => this.setState({books:data}))
    );
  }

  render (){
    return(
      <div className="App">
        <SearchBar searchRepoByTerm={(term)=>this.searchRepoByTerm(term)}/>

        <div className="content">
          <RepoList 
            repositories={this.state.repositories}
            addToBookmark={(id)=>this.addToBookmark(id)}/>

          <BookmarkList 
            books={this.state.books}/>
        </div>
      </div>
    )};
}

export default App;
