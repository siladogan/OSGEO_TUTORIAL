var developmentDatabase = {
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'd1l1qur5r02oru',
    user: 'khlvuoakfkzwwa',
    password: '3c1733e14e15673d719d1e65120f64ce2cd75feb1e1453d293eaf186b4afeea4'
    }
    }
    
    var connectionString = "postgres://khlvuoakfkzwwa:3c1733e14e15673d719d1e65120f64ce2cd75feb1e1453d293eaf186b4afeea4@ec2-52-7-115-250.compute-1.amazonaws.com:5432/d1l1qur5r02oru?ssl=true";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }



    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
