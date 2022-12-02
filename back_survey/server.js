const express = require('express');
const cors = require('cors');
const fs = require("fs");
const json = require('express');

const app = express();
app.use(express.json());
app.use(cors())

const date = new Date(0);
date.setUTCSeconds(Date.now()/1000)

app.get('/', (req, res) => {
	console.log('/')
})

app.use('/register', (req, res, next) => {
	console.log("-------------A new request received at " + date + '-------------');
	
	const path = "./vars.txt"
	var updated_vars_str

	// Check if vars.txt exists and create it
	if (!fs.existsSync(path)) {
		fs.open("vars.txt", "w", (err, file) => {
			if (err) {
				throw err;
				console.log("I could not create log.txt");
			}
		}
	);
	// Init var
	const new_vars = {"id" : 1 , "second_var": 0};
	const new_vars_str = JSON.stringify(new_vars, null, 2) + '\n'
	fs.appendFile("vars.txt", new_vars_str, (err) => {
		if (err) {
			throw err;
			console.log("I could not append to log.txt");
		}		
	});
	console.log("vars.txt created and intialized");

	} else {
		// read vars.txt 
		try {
			const file = fs.readFileSync("vars.txt", "utf8");
			const vars = JSON.parse(file);		
			const id = vars["id"];
			const second_var = vars["second_var"];
			updated_vars = {"id" : id + 1, "second_var" : second_var + 1};
			updated_vars_str = JSON.stringify(updated_vars, null, 2) + '\n'
			fs.writeFileSync("vars.txt", updated_vars_str);

		  } catch (err) {
			console.error(err);
		  }
	}
	next();
});

app.post('/register', (req, res) => {
	body_obj = req['body'];
	body_obj['uploaded'] = date;
	const body = JSON.stringify(body_obj, null, 2) + '\n'
	const path = "./log.txt"

	// Check if log.txt exists
	if (!fs.existsSync(path)) {
		fs.open("log.txt", "w", (err, file) => {
			if (err) {
				throw err;
				console.log("I could not create log.txt");
			}
		});
		console.log("log.txt created");
	}

	// Append entries to log.txt
	fs.appendFile("log.txt", body, (err) => {
		if (err) {
			throw err;
			console.log("I could not append to log.txt");
		}		
	 });
	console.log("Request appended");
})

app.listen(3000, () => {
	console.log('App is running on port 3000')
});
