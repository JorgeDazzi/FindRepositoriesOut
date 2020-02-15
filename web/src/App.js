import React from 'react';
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      repositories: [],
      api:"http://localhost:8081/"
    }
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

  render (){
    return(
      <div className="App">
        <SearchBar searchRepoByTerm={(term)=>this.searchRepoByTerm(term)}/>

        <div className="content">
          <RepoList />
        </div>
      </div>
    )};
}

export default App;
