var ansver;
var correctAnsver;
var term11;
var term22;
var numberOfRightAnsvers = 0;
var numberOfWrongAnsvers = 0;
var numberOfAllAnsvers = 0;

var vara1 = 0;
var vara2 = 0;

while(numberOfAllAnsvers <= 9) {

var term11 = Math.floor(Math.random() * 101);
var term22 = Math.floor(Math.random() * 101);

if (term11 < term22) {

vara1 = term11;
vara2 = term22;

term11 = vara2;
term22 = vara1;

}

var correctAnsver = term11 - term22;

ansver = prompt("Kuinka paljon on " + term11 + " - " + term22 + " ?");

if (ansver == correctAnsver) {
	document.write("OIKEIN! " + term11 + " - " + term22 + " = " + correctAnsver + " !<br>");
	document.write("<br>");
	numberOfRightAnsvers = numberOfRightAnsvers + 1;
}

if (ansver != correctAnsver) {
	document.write("Väärin. Vastasit " + ansver + ".<br>"); 
	document.write("Oikea vastaus on " + term11 + " - " + term22 + " = " + correctAnsver + " <br>");
	document.write("<br>");
	numberOfWrongAnsvers = numberOfWrongAnsvers + 1;
}

numberOfAllAnsvers = numberOfWrongAnsvers + numberOfRightAnsvers;

}

if (numberOfRightAnsvers <= 5) {
	document.write("Harjoittele lisää, tarvitset vielä paljon harjoitusta.<br>");
}

if (numberOfRightAnsvers > 5 && numberOfRightAnsvers <= 7) {
	document.write("Melko hyvä suoritus! Harjoittele lisää.<br>");
}

if (numberOfRightAnsvers > 7 && numberOfRightAnsvers <= 9) {
	document.write("Melkein täydellinen suoritus! Vielä vähän harjoitusta!<br>");
}

if (numberOfRightAnsvers == 10) {
	document.write("Kymmen oikein!!! Täydellinen suoritus!!!<br>");
}