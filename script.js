// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(data){
    display.value += data;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}