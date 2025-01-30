let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let value = this.innerText;

        if (value === "C") {
            expression = "";
        } else if (value === "=") {
            try {
                expression = eval(expression); // Evaluates the expression
            } catch {
                expression = "Error";
            }
        } else {
            expression += value;
        }

        display.value = expression;
    });
});
