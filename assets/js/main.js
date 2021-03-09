console.log("ciao ale");

//select dificulty 
// var difficolta = 0
// var caselle = 0
// switch (difficolta) {
// 	case 0:
// 		caselle = 100
// 		break;
// 	case 0:
// 		caselle = 80
// 		break;
// 	case 0:
// 		caselle = 50
// 		break;
// 	default:
// 		break;
// }
var bomb = []
var x = 0
for (let i = 0; i < 16; i++) {
	do {
		x = random(1, 100)
	} while (bomb.includes(x));
	bomb.push(x)
}

var arrayWithBomb = []

for (let i = 1; i <= 100; i++) {
	if (bomb.includes(i)) {
		arrayWithBomb.push("bomb")
	} else {
		arrayWithBomb.push(i)
	}
}


console.log(bomb, arrayWithBomb);

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}