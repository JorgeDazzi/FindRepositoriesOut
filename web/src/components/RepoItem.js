import React, { Component } from 'react';

class RepoItem extends Component {
    getDescription = (desc)=>{
        let txt = "";
        if(desc != null) txt = desc.length > 80 ? `${desc.substring(0,20)}[...]`:desc;
        
        return txt; 
    }
    addToBookmark = (id)=>{
        this.props.addToBookmark(id);
    }

    render() {
        return (
            <div className="repo">
                <div className="header">
                <div className="title"><h3>{`${this.props.repo.name}`} <span>{`${this.getDescription(this.props.repo.description)}`}</span></h3></div>
                    <div className="externalLink">
                        <button onClick={()=>window.open(this.props.repo.html_url,"_blank")} ><i className="material-icons">open_in_new</i></button>
                    </div>
                    <div className="externalLink">
                        <button onClick={(id)=>this.addToBookmark(this.props.repo.id)} ><i className="material-icons">playlist_add</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RepoItem;