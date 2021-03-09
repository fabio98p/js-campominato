console.log("ciao ale");
//lo so è un casino e dovrei abituarmi a mettere commenti ma si è fatto un po tardi ed questo è quello che sono riuscito a fare....
//prossimo esercizio prometto di mettere i commenti fin dall'inizio
//select dificulty 

//se si preme un numero diverso da 0 1 2 entra in un loop infinito
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
	let a = bomb.includes(i)
	if (bomb.includes(i)) {
		arrayWithBomb.push(false);
	} else {
		arrayWithBomb.push(true);
	}
	document.getElementById("campo").innerHTML += `<div id="casella` + i + `" onclick="myClick('casella` + i + `')" class="` + !a + `">ciao</div>`
	
}
var arrayPlayer = []

function myClick(param) {

	if (document.getElementById(param).classList[0] == "false") {
		console.log("hai perso");
		console.log(arrayPlayer.length);
	}
	if (!(arrayPlayer.includes(document.getElementById(param).id))) {
		arrayPlayer.push(param)
	}
	console.log(arrayPlayer);

}

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}