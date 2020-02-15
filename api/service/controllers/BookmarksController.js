const fetch = require('node-fetch');
const bm = require('../models/bookmark');

const repoController = require('./RepositoriesController');

exports.getBookmarks = function(res){
    let promise = new ( async (resolve, reject) =>{
        let book = [];

        for(let i = 0; i < bm.getBookmarks().length; i++ ){
            book.push(await repoController.getRepositoryById(bm.getBookmarks()[i]));
        }

        resolve(book);
    })
    .then(json => res.status(200).json(json))
    .catch(error => res.status(400).json(error));
}