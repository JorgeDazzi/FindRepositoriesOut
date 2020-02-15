const express = require('express');
const router = express.Router();
const repoController = require('../controllers/RepositoriesController')



/* 
    getRepositoryById:
    fetch the id by method GET, in order to search into github API and retrives
    the repository desires
*/
router.get('/:id', async function(req, res){
    repoController.getRepositoryById(req.params.id)
    .then(json => {
        if(json.message != null && json.message == "Not Found")
            res.status(404).json(json);

        res.status(200).json(json);
    })
    .catch( error => res.status(400).json(error))
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