class Config{
    
    //Choose wisely the port for your application
    port = 8081;

    //Github API v3 URL
    githubAPI = "https://api.github.com/";
}

const config = new Config();

module.exports = config;