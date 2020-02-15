const express = require('express');
const router = express.Router();

/* Controllers */
//const bookController = require('../controllers/')

/* Models */
const bm = require('../models/bookmark');



/*
    Method: GET
    Return a list of all bookmarks saved
*/
router.get('/', function(req, res){
    //controller
});

router.post('/', function(req,res) {
    //controller
});


router.delete('/delete/:id', function(req,res) {
    //controller
});



module.exports = router;


