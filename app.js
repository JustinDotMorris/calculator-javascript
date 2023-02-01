//buttons
const numButton = document.querySelectorAll(".calc-bottom--num-button")
const operatorButton = document.querySelectorAll(".calc-bottom--op-button")
const equalsButton = document.querySelector(".calc-bottom--equals-button")
const clearButton = document.querySelector(".calc-bottom--clear-button")
const deleteButton = document.querySelector(".calc-bottom--delete-button")
const displayCalculation = document.querySelector(".calc-top--history-box")
const displayOutput = document.querySelector(".calc-top--output-box")

let firstNum = "";
let secondNum = "";
let currentOperator = "";

//functions
const handleNumClick = (event)=>{
    
    const selectedNumber = event.target.innerText;
    console.log(selectedNumber)

//if decimal is already in a number then dont add any more 
    // if(firstNum.includes(".") && selectedNumber ==="."){
    //     return;
    // }if(secondNum.includes(".") && selectedNumber ==="."){
    //     return;
    // }

    if (currentOperator === ""){
        firstNum += selectedNumber;
    }else{
        secondNum += selectedNumber;
    }
    showCalcualtion();
}

const handleOperatorClick = (event) =>{
    const selectedOperator = event.target.innerText;
    currentOperator = selectedOperator;
    showCalcualtion();
}

const showCalcualtion = ()=>{
    const historyString = firstNum+" "+currentOperator+" "+secondNum;
    displayCalculation.value = historyString;
}

const calculateOutput=(firstNum,currentOperator,secondNum)=>{
    const firstNumAsInt = Number(firstNum);
    const secondNumAsInt = Number(secondNum);

    console.log(firstNumAsInt,secondNumAsInt);

    if(currentOperator==="+"){
        return firstNumAsInt + secondNumAsInt;
    }
    if(currentOperator==="-"){
        return firstNumAsInt - secondNumAsInt;
    }
    if(currentOperator==="*"){
        return firstNumAsInt * secondNumAsInt;
    }
    if(currentOperator==="/"){
        return firstNumAsInt / secondNumAsInt;
    }
    console.log("invalid operater")
}

const handleEquals = ()=>{
    let result = calculateOutput(firstNum,currentOperator,secondNum);
    displayOutput.value=result;
    if(currentOperator!=""){
        firstNum=result;
        secondNum="";
    }
}

const handleClear=()=>{
    firstNum="";
    secondNum="";
    currentOperator="";
    displayOutput.value="";
    calculateOutput.value="";
    showCalcualtion();
}

handleDelete=()=>{
    if(currentOperator === ""){
        firstNum = firstNum.substring(0,firstNum.length-1);
        console.log(firstNum)
    }else{
        secondNum = secondNum.substring(0,secondNum.length-1);
        console.log(secondNum)
    }
    showCalcualtion();

}

//event listeners
numButton.forEach((button)=>{
    button.addEventListener("click",handleNumClick);
});
operatorButton.forEach((button)=>{
    button.addEventListener("click",handleOperatorClick)
})
equalsButton.addEventListener("click",handleEquals);
clearButton.addEventListener("click",handleClear);
deleteButton.addEventListener("click",handleDelete);
