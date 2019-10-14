const path = require("path");

module.exports = {
    "development": {
        "username": process.env.SQL_USER,
        "password": process.env.SQL_KEY,
        "database": process.env.SQL_DBNAME,
        "host": process.env.SQL_HOST,
        "dialect": "sqlite",
        "storage": path.join(__dirname, "../../database/automate.db")
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "testDB",
        "host": "localhost",
        "dialect": "sqlite",
        "logging": false
    },
    "production": {
        "username": " ",
        "password": " ",
        "database": " ",
        "host": " ",
        "dialect": "sqlite",
    }
}