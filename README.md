# FindRepositoriesOut
Code Challenge - Repositories Search + Bookmark


## Endpoint:
- [x] one endpoint that takes a search term and returns a list of repositories. Hint: Don’t
implement pagination for this challenge.
- [x] one endpoint that allows bookmarking a repository by its id. Hint: Bookmarks don’t need
to be persisted in a database for this challenge.
- [x] one endpoint to get all bookmarked repositories
    ###### Bonus
    - [x] Add documentation for your API in a format of your choice
    - [ ] Add tests.
    - [x] Add basic authentication to your API
    - [x] Add an endpoint to remove a bookmark

    ###### Be mindful of the following:
    - [x] short code and more than one file.
    - [ ] the application that could be externally configurable (what is it means)
    - [x] git for version control
    - [x] Include a small README that explains how to start your service
    
    
## Installation:

1. In order to clone it, proceed to desired directory and then execute the step below:
`````
git clone https://github.com/JorgeDazzi/FindRepositoriesOut.git
`````
2. Install dependencies from directory api and web

        - FindRepositoriesOut
          |
           - - -> api
          |
           - - -> web
   
Install the dependecies:
`````
cd api
npm install
cd ../
cd web
npm install
`````
3. Start the Nodemon and React
  `````
  [ api directory ]: nodemon app.js
  `````
  
  `````
  [ web directory ]: npm start
  `````

## API Documentation:

__Repository by ID__
`````
GET /repo/:id
`````
###### Input
Mandatory | Name | Type | Description
----------|-----|------|------------
Yes | id | Integer| Repository ID that you want information


__Search repositories by term__
`````
GET /repo/search/:term
`````
###### Input
Mandatory | Name | Type | Description
----------|-----|------|------------
Yes | term | String| Term you want to search for


__Receive a list of all repository saved__
`````
GET /bookmark
`````


__Save a repository to Bookmark__
`````
POST /bookmark
`````
###### Input
Mandatory | Name | Type | Description
----------|-----|------|------------
Yes | id | Integer| The repositiry ID that you want to save



__Remove a repository from Bookmark__
`````
DELETE /bookmark
`````
###### Input
Mandatory | Name | Type | Description
----------|-----|------|------------
Yes | id | Integer| The repository ID that you want to remove
