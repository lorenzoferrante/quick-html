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
	'<!DOCTYPE HTML>\n<html>\n  <head>\n  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n  <title>Your Website</title>\n  <link rel="stylesheet" type="text/css" href="css/index.css">\n  <script type="text/javascript" src="app.js"></script>\n  </head>\n<body>\n</body>\n</html>', function (err) {
    if (err) throw err;
    console.log('Created HTML file!');
});

fs.writeFile('Web-Template/css/index.css', '/* http://meyerweb.com/eric/tools/css/reset/ \n v2.0 | 20110126 \n License: none (public domain)\n */\n html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n a, abbr, acronym, address,big, cite, code,\n del, dfn, em, img, ins, kbd, q, s, samp,\n small, strike, strong, sub, sup, tt, var,\n b, u, i, center,\n dl, dt, dd, ol, ul, li,\n fieldset, form, label, legend,\n table, caption, tbody, tfoot, thead, tr, th, td,\n article, aside, canvas, details, embed, \n figure, figcaption, footer, header, hgroup, \n menu, nav, output, ruby, section, summary,\n time, mark, audio, video {\n margin: 0;\n padding: 0;\n border: 0;\n font-size: 100%;\n font: inherit;\n vertical-align: baseline;\n }\n /* HTML5 display-role reset for older browsers */\n article, aside, details, figcaption, figure, \n footer, header, hgroup, menu, nav, section {\n display: block;\n }\n body {\n  line-height: 1;\n }\n ol, ul {\n list-style: none;\n }/n blockquote, q {\n quotes: none;\n }\n blockquote:before, blockquote:after,\n q:before, q:after {\n content: "";\n content: none;\n }\n table {\n border-collapse: collapse;\n  border-spacing: 0;\n }', function (err) {
    if (err) throw err;
    console.log('Created CSS file!');
});

fs.writeFile('Web-Template/js/app.js', '', function (err) {
    if (err) throw err;
    console.log('Created JS file!');
});

fs.writeFile('Web-Template/package.json', '', function (err) {
    if (err) throw err;
    console.log('Created JSON file!');
});
