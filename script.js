

class Calculator{
    constructor(previousOperandText,currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
        
    }

    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
        previousOperandText.setAttribute("data-previous-operand",false)
    }

    delete(){
        this.currentOperand = this.currentOperand.slice(0,-1)
    }

    appendNumber(number){
        if( number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number
        this.currentOperandText.innerText = this.currentOperand.toLocaleString()
       
        
    }

    chooseOperation(operation){
        if ( this.currentOperand === '' ) return
        if ( this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand + operation
        this.currentOperand = ''
    }

    compute(){
         
       
        let computation 
        
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+':
               computation = previous + current
                break;

            case '-':
                computation = previous - current
                break;

            case '÷':
                computation = previous / current
                break;

            case '×':
                computation = previous * current
                break;
        
            default:
                return
        }
         
        this.currentOperand = computation
      
    }

    
       afterEq(){
         if (previousOperandColor == "false"){
        previousOperandText.setAttribute("data-previous-operand",true);
        
       } 
       }
  
    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
        this.previousOperandText.innerText = this.previousOperand
         
        
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-ac]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')
const previousOperandColor = previousOperandText.getAttribute("data-previous-operand");

const calculator = new Calculator(previousOperandText,currentOperandText)

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        
        
    })
    
}) 

operationButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        
    })
}) 

equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.afterEq()
  calculator.updateDisplay()
 
  
})

allClearButton.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
    calculator.afterAC()
    
})

deleteButton.addEventListener('click', () =>{
    calculator.delete()
    calculator.updateDisplay()
})
