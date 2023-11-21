var ansver;
var correctAnsver;
var multiplier;
var multiplicand;
var numberOfRightAnsvers = 0;
var numberOfWrongAnsvers = 0;
var numberOfAllAnsvers = 0;

while(numberOfAllAnsvers <= 9) {

var multiplier = Math.floor(Math.random() * 11);
var multiplicand = Math.floor(Math.random() * 11);
var correctAnsver = multiplier * multiplicand;

ansver = prompt("Kuinka paljon on " + multiplier + " * " + multiplicand + " ?");

if (ansver == correctAnsver) {
	document.write("OIKEIN! " + multiplier + " * " + multiplicand + " = " + correctAnsver + " !<br>");
	document.write("<br>");
	numberOfRightAnsvers = numberOfRightAnsvers + 1;
}

if (ansver != correctAnsver) {
	document.write("Väärin. Vastasit " + ansver + ".<br>"); 
	document.write("Oikea vastaus on " + multiplier + " * " + multiplicand + " = " + correctAnsver + " <br>");
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