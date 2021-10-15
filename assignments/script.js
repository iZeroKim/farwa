let elem = [];
// assign the entire table row for hole 1 to a variable, elem
// elem[1] = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
// elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};
let parTotal = 0;
let scoreTotal = 0;
let overTotal = 0;
for(let i=1; i<=18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
  elem[i].children[4].children[1].onclick = function(){sub1(elem[i]);};
  elem[i].children[4].children[2].onclick = function(){clear(elem[i]);};

  parTotal = parTotal  + Number.parseInt(elem[i].children[1].innerHTML);

  if(elem[i].children[2].innerHTML == "-"){
    scoreTotal = scoreTotal + 0;
    
  } else{
    scoreTotal = scoreTotal + Number.parseInt(elem[i].children[2].innerHTML);
    
  }
  if(elem[i].children[3].innerHTML == "-"){
    
    overTotal = overTotal + 0;
  } else{
    overTotal = overTotal + Number.parseInt(elem[i].children[3].innerHTML);
  }

}
document.getElementById("parTotal").innerHTML = parTotal;
document.getElementById("scoreTotal").innerHTML = scoreTotal;
document.getElementById("overTotal").innerHTML = overTotal;

//function updateOverTotal
function updateOverTotal(){
  for(let i=1; i<=18; i++) {
    if(elem[i].children[3].innerHTML == "-"){
    
      overTotal = overTotal + 0;
    } else{
      overTotal = overTotal + Number.parseInt(elem[i].children[3].innerHTML);
    }  
  }
  document.getElementById("overTotal").innerHTML = overTotal;
}
// Clear hole
function clear (elem){
  let currentScore = elem.children[2].innerHTML;
  currentScore = Number.parseInt(currentScore);
  elem.children[2].innerHTML = "-";
  scoreTotal = scoreTotal - currentScore;
  
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
  
  elem.children[3].innerHTML = "-";
  updateOverTotal();
}
// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-"){ 
    elem.children[2].innerHTML = "1";
    scoreTotal = scoreTotal + 1;
    elem.children[3].innerHTML = Number.parseInt(elem.children[2].innerHTML) - Number.parseInt(elem.children[1].innerHTML);
    
    document.getElementById("scoreTotal").innerHTML = scoreTotal;
    updateOverTotal();
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    scoreTotal = scoreTotal + 1;
    elem.children[3].innerHTML = Number.parseInt(elem.children[2].innerHTML) - Number.parseInt(elem.children[1].innerHTML);
    document.getElementById("scoreTotal").innerHTML = scoreTotal;
    updateOverTotal();
  }
}

// subtract 1 function
function sub1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "-";
    scoreTotal = scoreTotal - 0;
    document.getElementById("scoreTotal").innerHTML = scoreTotal;
  }
  else if(elem.children[2].innerHTML == 0){
    elem.children[2].innerHTML = "0";
    scoreTotal = scoreTotal - 0;
    elem.children[3].innerHTML = Number.parseInt(elem.children[2].innerHTML) - Number.parseInt(elem.children[1].innerHTML);
    document.getElementById("scoreTotal").innerHTML = scoreTotal;
    updateOverTotal();
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    scoreTotal = scoreTotal - 1;
    elem.children[3].innerHTML = Number.parseInt(elem.children[2].innerHTML) - Number.parseInt(elem.children[1].innerHTML);
    document.getElementById("scoreTotal").innerHTML = scoreTotal;
    updateOverTotal();
  }
}
