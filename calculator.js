
  
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



function appendValue(value) {
    document.kalkulatorObrazkowy.displayImage.value += value;
}
function calculateImage() {
    try {
        document.kalkulatorObrazkowy.displayImage.value = eval(document.kalkulatorObrazkowy.displayImage.value);
    } catch (error) {
        document.kalkulatorObrazkowy.displayImage.value = 'Error';
    }
}

function wyczyscWyswietlacz() {
    document.forms["kalkulatorObrazkowy"].elements["displayImage"].value = '';
}