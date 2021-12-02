let keypad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display-box");
let entities, operators;
//displaying numbers in the display as they clicked
keypad.addEventListener("click", e => {
    entities = ["+", "−", "×", "÷", "%"];
    operators = ["+", "-", "*", "/", "%"];
    if (e.target.innerText === "AC") {
        displayBox.innerText = "";
    }
    else if (e.target.innerText === "C") {
        clearLast();
    }
    // Performing calculation as the "=" key is pressed and displaying the result
    else if (e.target.innerText === "=") {
        for (let char of displayBox.innerText){
            entities.forEach((element, index) => {if (char == element) 
                displayBox.innerText = displayBox.innerText.replace(char, operators[index])
            });
        }
        if (!operators.includes(displayBox.innerText[displayBox.innerText.length - 1])) {
            displayBox.innerText = eval(displayBox.innerText)
        }
        
    }
    else display(e.target.innerText);
    if (displayBox.innerText.length < 5) displayBox.style.fontSize = 90 + "px";
    else displayBox.style.fontSize = 75 + "px";
});
//function for "C" key press
let clearLast = _ => displayBox.innerText = displayBox.innerText.slice(0, displayBox.innerText.length - 1);


let filter = x => {
    let current = displayBox.innerText;
    let lastChar = current[current.length - 1];

    if (current.length >= 9) return false;

    if (current == "0" && x != ".") clearLast();
    if (operators.includes(x) && operators.includes(lastChar)) return false;
    return true;
}
//function for displaying keypresses
let display = (buttonText) => {
    if (filter(buttonText)) displayBox.innerText += buttonText;
}
