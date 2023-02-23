/*
x creare variabile età
x creare variabile tragitto
x creare variabile e calcolare prezzo del biglietto standard 
x creare variabile e calcolare prezzo del biglietto scontanto del 20%
x creare variabile e calcolare prezzo del biglietto scontato del 40%
x SE l'utente ha meno di 18 anni
    o Prezzo scontanto del 20%
x ALTRIMENTI SE l'utente ha più di 65 anni
    o Prezzo scontato del 40%
x ALTRIMENTI prezzo standard
*/

let eta = prompt("Quanti anni hai?");
let tragitto = prompt("Quanti km vuoi percorrere?");
let prezzoStandard = 0.21 * tragitto;
let prezzoScontato20 = (prezzoStandard - (prezzoStandard * 20 / 100));
let prezzoMinorenni = prezzoScontato20.toFixed(2);
let prezzoScontato40 = (prezzoStandard - (prezzoStandard * 40 / 100));
let prezzoOver65 = prezzoScontato40.toFixed(2);

if (eta < 18) {
    document.writeln(("Il prezzo del tuo biglietto è di ") + (prezzoMinorenni) + ("\u20AC"))
} else if (eta > 65) {
    document.writeln(("Il prezzo del tuo biglietto è di ") + (prezzoOver65) + ("\u20AC"))
} else {
    document.writeln(("Il prezzo del tuo biglietto è di ") + (prezzoStandard) + ("\u20AC"))
}