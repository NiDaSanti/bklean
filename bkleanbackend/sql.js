const mysql = require("mysql");
console.log(mysql);

const con = mysql.createConnection({
	host: "localhost",
	user: "santi.nic",
	password: "password"
});

con.connect((err) => {
	if(err) throw err;
	console.log("Connected!");
})