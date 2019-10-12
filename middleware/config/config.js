module.exports = {
    "development": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_KEY,
        "database": process.env.MYSQL_DBNAME,
        "host": process.env.MYSQL_HOST,
        "dialect": "mysql",
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "testDB",
        "host": "localhost",
        "dialect": "mysql",
        "logging": false
    },
    "production": {
        "username": " ",
        "password": " ",
        "database": " ",
        "host": " ",
        "dialect": "mysql",
    }
}