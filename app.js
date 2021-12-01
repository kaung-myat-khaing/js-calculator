let keypad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display-box");
//displaying numbers in the display as they clicked
keypad.addEventListener("click", e => {
    let entities = ["+", "−", "×", "÷"];
    let operators = ["+", "-", "*", "/"];
    if (e.target.innerText === "AC") {
        displayBox.innerText = "";
    }
    else if (e.target.innerText === "C") {
        displayBox.innerText = displayBox.innerText.slice(0,displayBox.innerText.length-1);
    }
    // Performing calculation as the "=" key is pressed and displaying the result
    else if (e.target.innerText === "=") {
        for (let char of displayBox.innerText){
            for(let i=0; i<entities.length; i++){
            if(isNaN(char) && char == entities[i])displayBox.innerText=displayBox.innerText.replace(char, operators[i]);   
            }  
        }
        
        displayBox.innerText = eval(displayBox.innerText).toFixed(5);
    } 
    else display(e.target.innerText);
});
//function for displaying keypresses
let display = (buttonText) => displayBox.innerText += buttonText;
