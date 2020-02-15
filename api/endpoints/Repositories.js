const express = require('express');
const router = express.Router();
const repoController = require('../controllers/RepositoriesController')



/* 
    getRepositoryById:
    fetch the id by method GET, in order to search into github API and retrives
    the repository desires
*/
router.get('/:id', async function(req, res){
    repoController.getRepositoryById(
          res,
          req.params.id
    );
});


/*
    SearchRepositoriesByTerm
    search into Github API the repositories with term desires.
*/
router.get('/search/:term', function(req, res){
    repoController.searchRepositoriesByTerm(
        res,
        req.params.term
    );
})


module.exports = router;