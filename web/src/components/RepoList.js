import React, { Component } from 'react';
import RepoItem from './RepoItem';

class RepoList extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.repositories.map(
                        (repo, ikey) => <RepoItem
                                            key={ikey++}
                                            repo={repo}
                                            addToBookmark={(id)=>this.props.addToBookmark(id)}
                                            />
                    )
                }
            </div>
        );
    }
}

export default RepoList;