console.log("ciao ale");

//select dificulty 
var difficolta = 0
do {
	difficolta = parseInt(prompt("scegli la dificolta tra 0, 1, 2", "0"));
} while (isNaN(difficolta) || difficolta < 0 || difficolta > 2);

var caselle = 0
switch (difficolta) {
	case 0:
		caselle = 100
		break;
	case 1:
		caselle = 80
		break;
	case 2:
		caselle = 50
		break;
}
var bomb = [];
var x = 0;
for (let i = 0; i < 16; i++) {
	do {
		x = random(1, caselle);
	} while (bomb.includes(x));
	bomb.push(x);
}

var arrayWithBomb = []

for (let i = 1; i <= caselle; i++) {
	//arrayWithBomb.push(bomb.includes(i));

	if (bomb.includes(i)) {
		arrayWithBomb.push(false);
	} else {
		arrayWithBomb.push(true);
	}
}

var arrayPlayer = []
var userNumber
var observer = true

for (let i = 1; i <= (caselle - 16); i++) {
	observer = true
	do {
		if (observer) {
			observer = false
			userNumber = parseInt(prompt("scrivi un numero da 1 a " + caselle, "1"));
		}
		else {
			userNumber = parseInt(prompt("hai sbagliato a scrivere, scrivi un altro numero", "1"));
		}
	} while (arrayPlayer.includes(userNumber) || isNaN(userNumber) || userNumber < 1 || userNumber > caselle);
	console.log(userNumber, caselle);

	if (!arrayWithBomb[userNumber - 1]) {//-1 perche è un array
		console.log("game over");
		console.log("hai fatto " + arrayPlayer.length + " punti");
		break;
	}
	arrayPlayer.push(userNumber)
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}