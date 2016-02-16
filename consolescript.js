//console.log('hello from node');
var squaresize = 20;

for (var row = 0; row < 2; row++) {
	for(var i = 0; i < squaresize; i++) {
		console.log('');
		console.log(' ');
		for(var col = 0; col < 2; col++) {
			for(var j = 0; j < squaresize; j++) console.log('@');
		}
	}
	console.log('');
}
