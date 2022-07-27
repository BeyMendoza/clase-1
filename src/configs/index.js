require("dotenv").config()


const env = process.env;


const appConfigs = {
    server : {
        PORT : env.SERVER_PORT || 4000,
    },
    mysql : {
        PORT: env.MYSQL_PORT || 3306,
        HOST: env.MYSQL_HOST || 'localhost',
        USER : env.MYSQL_USER || 'root',
        DATABASE : env.MYSQL_DATABASE || 'test',
        PASSWORD : env.MYSQL_PASSWORD || 'root'
    }
}


module.exports = appConfigs;