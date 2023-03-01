/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let obiwanAttack = 25
let anakinAttack = 35

//if (obiwanAttack > anakinAttack) {
  //  console.log('Obiwan has a better attack than Anakin.')
//} else if (anakinAttack > obiwanAttack) {
   // console.log('Anakin has a better attack than Obiwan.')
//} else {
  //  console.log('You are going down a path that I can not follow.')
//}

 let obiwanHealth = 100
 let obiwanDefense = 0

// if (obiwanHealth + obiwanDefense < anakinAttack){
//     console.log('Obiwan has died')
// }
// else if (obiwanHealth > anakinAttack){
//     obiwanHealth -= anakinAttack
//     console.log('Obiwans health is now' + obiwanHealth)
// }
// else if (obiwanHealth + obiwanDefense > anakinAttack){
//     console.log('Anakin used force push it was not very effective')
// }
 obiwanDefense += 30

// let coinflip = 'heads'

// if (coinflip === 'heads') {
//     console.log('The fight continues!')
// } else {
//     console.log('Anakin flees from Obiwan')
// }

for(let i = 0;i < 5; i++){
    
  if (obiwanHealth > anakinAttack -obiwanDefense){
         obiwanHealth -= anakinAttack - obiwanDefense
         console.log('Obiwans health is now ' + obiwanHealth)
    } else {
         console.log('Obiwan did not get the high ground and was pwnd')}}

         while(obiwanHealth > 0) {
            obiwanHealth -=(anakinAttack - obiwanDefense)
            console.log(`Obiwans health is now at ${obiwanHealth}`)
            if(obiwanHealth <= 0){
                console.log('Obiwan is part of the living force now.')
            }
         }