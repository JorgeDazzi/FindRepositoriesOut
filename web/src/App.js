import React from 'react';
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import './App.css';

class App extends React.Component {
  render (){
    return(
      <div className="App">
        <SearchBar/>

        <div className="content">
          <RepoList />
        </div>
      </div>
    )};
}

export default App;
