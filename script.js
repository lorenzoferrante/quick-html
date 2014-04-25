var fs = require('fs');
var mkdirp = require('mkdirp');
var wrap = require('word-wrap');

mkdirp('Web-Template', function(err) { 
	if (err) console.error(err)
    else console.log('Created main directory!')
});

mkdirp('Web-Template/css', function(err) { 
	if (err) console.error(err)
    else console.log('Created css directory!')
});

mkdirp('Web-Template/js', function(err) { 
	if (err) console.error(err)
    else console.log('Created js directory!')
});


fs.writeFile('Web-Template/index.html', 
	'<!DOCTYPE HTML>\n<html>\n  <head>\n  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n  <title>Your Website</title>\n  <link rel="stylesheet" type="text/css" href="index.css">\n  <script type="text/javascript" src="app.js"></script>\n  </head>\n<body>\n</body>\n</html>', function (err) {
    if (err) throw err;
    console.log('Created HTML file!');
});

fs.writeFile('Web-Template/css/index.css', '', function (err) {
    if (err) throw err;
    console.log('Created CSS file!');
});

fs.writeFile('Web-Template/js/app.js', '', function (err) {
    if (err) throw err;
    console.log('Created JS file!');
});
