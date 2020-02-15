const fetch = require('node-fetch');

/* External API */
const githubUrl = "https://api.github.com/";

exports.getRepositoryById = function(res, id){
    return fetch(`${githubUrl}repositories/${id}`)
    .then(response => response.json())
    .then(json => {
        if(json.message != null && json.message == "Not Found")
            res.status(404).json();
        
        res.status(200).json( json );
    })
    .catch(error => error);
}


exports.searchRepositoriesByTerm = function(res, term){
    return fetch(`${githubUrl}search/repositories?q=${term}&sort=stars&order=desc`)
    .then(response => response.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.status(400).json(error));
}