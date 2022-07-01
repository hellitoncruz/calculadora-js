const display = document.querySelector('.display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')



function inserir(num) {
    if(SyntaxError) { 
        return 
    }
    

    if(display.value.length < 19) {
      
        if(isNaN(num)) {
            display.value += num
        }
        else if(display.value.length == 1 && display.value[0] == 0) {
            display.value = num
        }
        else {
            display.value += num
        }
    }
    else {
        return
    }
}

function clean() {
   
    SyntaxError = false
     
    display.value = "0";

}

function equal() {
    var expression = display.value
    
    var flag = false 

    for(i = 0; i < expression.length; i++) {
        if(isNaN(expression[i]) && isNaN(expression[i+1])) {
                SyntaxError = true
                display.value = "Operação Inválida!"
        }
    }

    if(flag == false) { 
        // Função de erro (infinito)
        var answer = eval(expression)
        if(isFinite(answer)) {
            display.value = answer
        }
        else {
            display.value = "Operação inválida!" 
            SyntaxError = true
        }
    }
   
    
}

function back() {
    if(SyntaxError) {
        return
    }

    display.value = display.value.substring(0,display.value.length-1)
    
    if(display.value == "") {
        display.value = "0"
    }

}

numbers.forEach( (button) => {
    button.addEventListener('click', calculate)
})



operators.forEach( (button) => {
    button.addEventListener('click', calculate)
})
var SyntaxError = false

function calculate(event) {
    var buttonValue = event.target.value


    if (!isNaN(buttonValue) || (isNaN(buttonValue) && buttonValue != "=" && buttonValue != "<" && buttonValue != "c")) {
        if(buttonValue == "x") {
            buttonValue = "*" 
        } // Mudar o 'x' para '*'
        inserir(buttonValue) 

    }
    else if (buttonValue == '=') {
        equal() 
    }
    else if (buttonValue == "<") {
        back() 
    }
    else if (buttonValue == "c") {
        clean() 
    }
    
}
