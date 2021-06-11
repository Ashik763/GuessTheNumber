
window.onload = function() {

    document.getElementById("check").addEventListener("click",playGame);
    document.getElementById("restart").addEventListener("click",restart);

}
let guesses = [];

function restart () {
    console.log("restart");
    const randomNumber2 = randomNumber();
    document.getElementById("result").innerHTML = '';
      guesses = [];
      displayHistory();

}
const randomNumber = () =>{
    const randomNumber1 = Math.random() * 100;
    const randomNumber = Math.floor(randomNumber1);

    console.log(randomNumber);
    return randomNumber
    
}
const randomNumber2 = randomNumber(); 
    


 function playGame() {
 
    const inputNum = document.getElementById("input").value;
    guesses.push(inputNum);
    
   
    if(randomNumber2 == inputNum){
      
        document.getElementById("result").innerHTML = "<h1 style=color:green >You got it my boy!</h1>"
    }
    else if(randomNumber2 > inputNum){
    
    document.getElementById("result").innerHTML = "<h1 style=color:red >Your guess is too low</h1>"

  }
    else if(randomNumber2 < inputNum){
    document.getElementById("result").innerHTML = "<h1 style=color:red>Your guess is too high</h1>"
  }
  displayHistory(inputNum);
    
 }
function displayHistory(inputNum) {
    let index =  guesses.length -1 ;
    let list = "<ul class='list-group'>";
    while(index >= 0){
        list += "<li class='list-group-item'>" + "you guessed " + guesses[index] + "</li>";
        index --;

    }
   
    list =  list + "</ul>"

    document.getElementById("history").innerHTML = list;


}



