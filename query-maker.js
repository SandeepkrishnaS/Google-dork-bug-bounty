let query = [];
let domains = [];

const fs = require('fs');
const data = fs.readFileSync('domains.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let dorks = ["api_key", "email", "amount", "database.yml", "cmd=", ".php?searchst­ring=", ".php?id="];

lines.forEach((line) => {
	try{
    dorks.forEach((dork) => {
		  query.push("site:"+line+" inurl:"+dork);
    });
    domains.push(line);
	}
	catch(e){console.log(e);}
    });

exports.query = query;
exports.domains = domains;

console.log(query);
