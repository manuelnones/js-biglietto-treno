/*
x creare variabile età
x creare variabile tragitto
x creare variabile e calcolare prezzo del biglietto standard 
- creare variabile e calcolare prezzo del biglietto scontanto del 20%
- creare variabile e calcolare prezzo del biglietto scontato del 40%
- SE l'utente ha meno di 18 anni
    o Prezzo scontanto del 20%
- ALTRIMENTI SE l'utente ha più di 65 anni
    o Prezzo scontato del 40%
- ALTRIMENTI prezzo standard
*/

let età = prompt("Quanti anni hai?");
let tragitto = prompt("Quanti km vuoi percorrere?");
let prezzoStandard = ("Il prezzo del tuo biglietto è di ") + (0.21 * tragitto) + ("\u20AC");
let prezzoScontato20 = ("Il prezzo del tuo biglietto è di ") + (prezzoStandard - (prezzoStandard - 20 / 100));
let prezzoScontato40 = ("Il prezzo del tuo biglietto è di ") 

if(età < 18) {
    console.log(prezzoScontato20)
} else if(età > 65) {
    console.log(prezzoScontato40)
} else {
    console.log(prezzoStandard)
}
