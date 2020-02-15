const fetch = require('node-fetch');

/* External API */
const githubUrl = "https://api.github.com/";

exports.getRepositoryById = async function(id){
    let response = await fetch(`${githubUrl}repositories/${id}`);
    let json = await response.json();
    
    return await json
}


exports.searchRepositoriesByTerm = function(res, term){
    return fetch(`${githubUrl}search/repositories?q=${term}&sort=stars&order=desc`)
    .then(response => response.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.status(400).json(error));
}