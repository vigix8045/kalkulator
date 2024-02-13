document.addEventListener('DOMContentLoaded', function () {
   const darkModeToggle = document.getElementById('darkModeToggle');
   const body = document.body;
 
   darkModeToggle.addEventListener('click', function () {
     body.classList.toggle('dark-mode');
   });
 });
  
function calculate(){
    var number1= parseInt(document.getElementById('number1').value);
    var operator= document.getElementById('operator').value;
    var number2= parseInt(document.getElementById('number2').value);

    var result;
        
     switch(operator){
         case "choose":
            alert("Wybierz operator!");
            break;

         case "+": 
            result = number1 + number2;
            break;

         case "-": 
            result = number1 - number2;
            break;

         case "*": 
            result = number1 * number2;
            break;

         case "/": 

            if (number2 == 0) {
            alert("Nie dziel przez 0!");
            return;
             }

            result = number1 / number2;
             break;
        

        }

        document.getElementById('result').innerText = 'Wynik: ' + result;
   
}

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculateImage() {
   try {
     const result = eval(display.value);
 
     if (Number.isFinite(result)) {
       display.value = result;
     } else {
       throw new Error("Dzielenie przez zero");
     }
   } catch (error) {
     display.value = "Błąd";
   }
 }

