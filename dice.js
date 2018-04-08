var dice = {
	size : 6,
	rollingCount : 0,
	roll : function() {
		this.rollingCount += 1;
		return Math.ceil(this.size * Math.random());
	}
};

exports.name = dice;