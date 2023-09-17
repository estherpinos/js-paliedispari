
const messaggio= prompt('inserisci una parola');

const c = controllo(messaggio);

if(c==true){
  console.log("Parola palindroma");
}
else{
  console.log("Parola non palindroma");

}



function controllo(parola) {
  let parolaContrario=[];  // dichiaro un array vuoto
  for(i=parola.length-1; i>=0; i--){
    const lettera = parola[i];   
    parolaContrario += lettera; 
  }
  console.log("parola: " + parola);
  console.log("parola contrario : " + parolaContrario);

  if(parola == parolaContrario){
    return true;
  }
  else{
    return false;
  }
}




// PARI O DISPARI

// 1.Chiedere al utente con prompt di scelgiere pari o dispari e un numero da 1 a 5 

const scelta = prompt('scegli pari o dispari');

const n1 = parseInt(prompt('scegli un numero da 1 a 5 '));
if(isNaN(n1) || n1>5 || n1<1)
  alert("Inserire un numero da 1 a 5");

// 2.Dichiarare la funzione che genera un numero casuale e poi richiamarla ed inserire il valore all'interno di una variabile
function genera(){
  return Math.floor(Math.random()*5 + 1);
}
const n2 = genera();
console.log("Numero computer: " + n2);

//3.Calcolare la somma dei due numeri
let somma = n1+n2;
console.log("SOMMA: " + somma);

//4.Dichiarare la funzione che stabilisce se ha vinto pari o dispari
function pariDispari(s){
  if(s%2==0){
    return "pari";
  }
  else
    return "dispari";
}

//5.Calcolare il risultato e stabilire il vincitore
const ris = pariDispari(somma);

console.log("RISULTATO:" + ris);

if(ris=="pari" && scelta=="pari")
  console.log("Hai vinto");
else if (ris=="dispari" && scelta=="dispari")
  console.log("Hai vinto");
else
  console.log("Hai perso");




