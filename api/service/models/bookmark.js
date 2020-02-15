
class Bookmarks {
    constructor() {
      this.bookmarks = [];
    }

    getBookmarks(){
        return this.bookmarks;
    }

    addBookmark(id){
        this.bookmarks.push(id);
        this.bookmarks = this.bookmarks.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
    }

    deleteBookmark(id){
        if(this.bookmarks.indexOf(id) >= 0)
            this.bookmarks.splice( this.bookmarks.indexOf(id), 1 );
        else
            return false;

        return true;
    }
}

const books = new Bookmarks();

module.exports = books;