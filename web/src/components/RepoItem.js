import React, { Component } from 'react';

class RepoItem extends Component {
    render() {
        return (
            <div className="repo">
                <div className="header">
                <div className="title"><h3>{}</h3></div>
                    <div className="externalLink">
                        <button onClick={null} ><i className="material-icons">open_in_new</i></button>
                    </div>
                    <div className="externalLink">
                        <button onClick={null} ><i className="material-icons">playlist_add</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RepoItem;