const UserInput = document.getElementById('userInput');
var expression = '';

press = (num)=>{
    expression += num;
    UserInput.value = expression;
}

equal = ()=>{
    UserInput.value = eval(expression)
    expression = '';
}

erase =()=>{
    expression = '';
    UserInput.value = expression;
}

