var book = require('./lib/grade').book;

for(var i=2;i<process.argv.length;i++) {
	book.addNewGrade(parseInt(process.argv[i]));
}

console.log(book.gradeAverage());