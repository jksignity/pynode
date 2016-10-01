PyNode
=========

small npm library for launching python workers and providing two way communication

## Installation

	npm install pynode --save

## Usage

##### Format is as follows, returns a Promise

	var pynode = require('pynode');
	pynode.exec(filename, arguments);

##### 
	
	var pynode = require('pynode');
	pynode.exec(filename, arguments)
	.then(function(data){
		data = data[0].replace(/'/g, '"').replace(/\r?\n|\r/g, '');
		console.log(data);
	})
	.catch(function(err){
		console.log(err)
	})

### Side Notes:

* arguments are optional
* if returning dictionaries or lists from python file, use json.dumps
* removing \r,\n and "'" helps in better processing of output from python
* \r, \n are present because data is still from stdout

## Python files samples

	please check examples directory for that.


## Tests

	npm test

## Future Work

* making it much better (still working)
* allowing user to run python code directly from their file
* filtering of inputs
* maybe add more test cases, to test thoroughly

## Contributing

* All kinds of suggestions are welcome.
* Collaboration also welcome to make it better or add more languages.
* Please take care to maintain the existing coding style.
* Add tests for any new functionalities.

## Release History

* 0.1.0 Initial release