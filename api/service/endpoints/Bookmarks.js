const express = require('express');
const router = express.Router();

/* Controllers */
const bookController = require('../controllers/BookmarksController')

/* Models */
const bm = require('../models/bookmark');



/*
    Method: GET
    Return a list of all bookmarks saved
*/
router.get('/', function(req, res){
    bookController.getBookmarks(res);
});

router.post('/', function(req,res) {
    //controller
});


router.delete('/delete/:id', function(req,res) {
    //controller
});



module.exports = router;


