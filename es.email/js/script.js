//definizione delle variabili

const emailList = [`carla88@gmail.com`, `jason12@yahoo.com`, `michele64@mail.com`, `rosalinda11@outlook.com`];
const guessMail  = prompt(` Inserisci la tua email`)

//variabile di controllo
let check = false; 

// ciclo array di email
for( let i = 0; i < emailList.length; i++){
  // controllo se la mail inserita è una dei invitati
  if(guessMail === emailList[i]){
    // se sì, allora metto la variabile di controllo a true
    check = true;
  }
}
// se la mail inserita è invitata
if(check === true){
  console.log(`auguri, lei è uno/a dei nostri invitati`)
}
// se la mail inserità non risulta nel sistema
else{
  console.log(`ci dispiace, lei non è invitato/a in festa`)
}