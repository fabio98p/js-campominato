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
var bomb = [];
var x = 0;
for (let i = 0; i < 16; i++) {
	do {
		x = random(1, 100);
	} while (bomb.includes(x));
	bomb.push(x);
}

var arrayWithBomb = []

for (let i = 1; i <= 100; i++) {
	//arrayWithBomb.push(bomb.includes(i));

	if (bomb.includes(i)) {
		arrayWithBomb.push(false);
	} else {
		arrayWithBomb.push(true);
	}
}

var arrayPlayer = []
var y

for (let i = 1; i <= (100 - 16); i++) {

	do {
		y = parseInt(prompt("scrivi un numero da 1 a 100", "1"));
	} while (arrayPlayer.includes(y));

	if (!arrayWithBomb[y - 1]) {//-1 perche è un array
		console.log("game over");
		console.log("hai fatto " + arrayPlayer.length + " punti");
		break;
	}
	arrayPlayer.push(y)

}



function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}