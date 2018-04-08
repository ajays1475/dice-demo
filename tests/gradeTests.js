var book = require('../lib/grade').book;

exports["setUp"] = function (callback) {
	book.reset();
	callback();
};

exports["add new grade"] = function(test){
	book.addNewGrade(60);
	var count = book.getGradeCount();
	test.equal(count,1);
	test.done();
};

exports["grade average"] = function(test){
	book.addNewGrade(100);
	book.addNewGrade(200);
	var average = book.gradeAverage();
	test.equal(average,150);
	test.done();
};

exports["calculate grade"] = function(test){
	book.addNewGrade(90);
	book.addNewGrade(80);
	var letter = book.calculateGrade();
	test.equal(letter,'B');
	test.done();
};
