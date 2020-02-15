import React, { Component } from 'react';

class BookmarkItem extends Component {
    getDescription = (desc)=>{
        let txt = "";
        if(desc != null) txt = desc.length > 80 ? `${desc.substring(0,20)}[...]`:desc;
        
        return txt; 
    }
    
    render() {
        return (
            <div className="repo">
                <div className="header">
                <div className="title"><h3>{`${this.props.repo.name} ${this.getDescription(this.props.repo.description)}`}</h3></div>
                    <div className="externalLink">
                        <button onClick={()=>window.open(this.props.repo.html_url,"_blank")} ><i className="material-icons">open_in_new</i></button>
                    </div>
                    <div className="externalLink">
                        <button onClick={null} ><i className="material-icons">delete_forever</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookmarkItem;