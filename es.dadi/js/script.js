// definizione variabili
const pcNumber = Math.floor(Math.random() * 6 + 1);
const userNumber = Math.floor(Math.random() * 6 + 1);

//controllo quale numero è maggiore e definisco il vincitore
if(pcNumber > userNumber){
  // se il numero pc è maggiore a quello dell utente
  console.log(`Numero pc: ${pcNumber}, numero utente: ${userNumber}. Ha vinto il pc`)
}
// se il numero del utente è maggiore a quello del pc
else if(pcNumber < userNumber){
  console.log(`Numero pc: ${pcNumber}, numero utente: ${userNumber}. Hai vinto`)
}
// se i due numeri sono uguali
else if(pcNumber === userNumber){
  console.log(`Numero pc: ${pcNumber}, numero utente: ${userNumber}. Pareggio`)
}