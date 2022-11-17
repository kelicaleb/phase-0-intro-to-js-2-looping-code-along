let names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event){
    let message = []
    for(let i = 0; i < names.length; i++){
        message.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return message 
        
}
console.log(writeCards(names, "surprise"))
const num = 10;
function countDown(num) {
while(num >= 0 ) {
    console.log(num)
    num--
   }
   return num;
}