const display = document.getElementById("disp");

let op = "";

let lastnum = "";

const btn= document.querySelector('.botaovert');

let opform = false;

let sig = false;

function appendToDisplay(input) {
  if (display.value == 0) {
    display.value = "";
  }
  if (sig) {
    display.value = "";
    opform = false;
    colorReset();
  }
  display.value += input;
  lastnum = parseFloat(display.value);  // Update lastnum with the result
  if(sig){
    opform = true;
  }
}

function clearDisplay() {
  display.value = 0;
 
}

function calculate() {
  if (opform && sig) {
    op += parseFloat(display.value);  
    try {
      display.value = eval(op);
      
    } catch (error) {
      display.value = "error";
    }
    opform = false;
    sig = false;
  } 
}
function switchSignal() {
  display.value *= -1;
}

function percent(){
  display.value /= 10;
}

function div() {
  colorReset();
  op = display.value + '/';
  sig = true;
  document.getElementById("botaodiv").style.backgroundColor = 'rgb(255,255,255)';
  document.getElementById("botaodiv").style.color = 'rgb(248, 175, 76)';
}
function mult() {
  colorReset();
  op = display.value + '*';
  sig = true;
  document.getElementById("botaomult").style.backgroundColor = 'rgb(255,255,255)';
  document.getElementById("botaomult").style.color = 'rgb(248, 175, 76)';
}
function sub() {
  colorReset();
  op = display.value + '-';
  sig = true;
  document.getElementById("botaosub").style.backgroundColor = 'rgb(255,255,255)';
  document.getElementById("botaosub").style.color = 'rgb(248, 175, 76)';
}
function som() {
  colorReset();
  op = display.value + '+';
  sig = true;
  document.getElementById("botaosom").style.backgroundColor = 'rgb(255,255,255)';
  document.getElementById("botaosom").style.color = 'rgb(248, 175, 76)';
}

function colorReset() {
  document.getElementById("botaosom").style.backgroundColor = 'rgb(248, 175, 76)';
  document.getElementById("botaosom").style.color = 'rgb(243, 243, 243)';
  document.getElementById("botaosub").style.backgroundColor = 'rgb(248, 175, 76)';
  document.getElementById("botaosub").style.color = 'rgb(243, 243, 243)';
  document.getElementById("botaomult").style.backgroundColor = 'rgb(248, 175, 76)';
  document.getElementById("botaomult").style.color = 'rgb(243, 243, 243)';
  document.getElementById("botaodiv").style.backgroundColor = 'rgb(248, 175, 76)';
  document.getElementById("botaodiv").style.color = 'rgb(243, 243, 243)';
}