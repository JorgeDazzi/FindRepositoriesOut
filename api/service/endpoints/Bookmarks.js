const express = require('express');
const router = express.Router();

/* Controllers */
const bookController = require('../controllers/BookmarksController')


/*
    Method: GET
    Return a list of all bookmarks saved
*/
router.get('/', function(req, res){
    bookController.getBookmarks(res);
});

router.post('/', function(req,res) {
    bookController.addBookmark(req.body.id);
    res.status(200).json({status:"OK"});
});


router.delete('/:id', function(req,res) {
    let result = bookController.deleteBookmark(req.params.id);
    if(result.status == "Success")
        res.status(200).json(result)
    else
        res.status(404).json(result)
});



module.exports = router;


