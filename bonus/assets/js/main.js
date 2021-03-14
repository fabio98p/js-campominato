console.log("ciao ale");
//lo so è un casino e dovrei abituarmi a mettere commenti ma si è fatto un po tardi ed questo è quello che sono riuscito a fare....
//prossimo esercizio prometto di mettere i commenti fin dall'inizio
//select dificulty 

//faccio il controllo di dificolta e chiedo per N volte finche non mi da il numero corretto
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
var randomBomb = 0;
//mi creo un arrey di 16 bombe con numeri da uno a 100 
for (let i = 0; i < 16; i++) {
	do {
		randomBomb = random(1, caselle);
	} while (bomb.includes(randomBomb));
	bomb.push(randomBomb);
}

var arrayWithBomb = []
//creo un array da 1 a 100 nel quale se c'è la bomba da il valore false se no da vero
for (let i = 1; i <= caselle; i++) {
	//arrayWithBomb.push(bomb.includes(i));
	let a = bomb.includes(i)
	if (bomb.includes(i)) {
		arrayWithBomb.push(false);
	} else {
		arrayWithBomb.push(true);
	}
	//nello stesso tempo creo 100 div con un id unico, con onclick e con classe vero o falso
	document.getElementById("campo").innerHTML += `<div id="casella${i}" onclick="myClick('casella${i}')" class="${!a}"></div>`
}
var arrayPlayer = []

function myClick(param) {
	//se si perde compare la scritta e il quadratino cliccato diventa rosso
	if (document.getElementById(param).classList[0] == "false") {
		console.log(arrayPlayer.length);
		document.getElementsByClassName("noob")[0].classList.add("active")
		document.getElementById(param).classList.add("active-evil")

	}//se si vince il quadratino diventa verde e tiene conto dei punti nel arrayPlayer
	else{
		if (!(arrayPlayer.includes(document.getElementById(param).id))) {
			arrayPlayer.push(param)
			document.getElementById(param).classList.add("active-good")

		}
	}
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}