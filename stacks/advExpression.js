function compute(expression){
    let tokens = expression.split("");

    let num_stack = [];
    let sym_stack = [];

    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] == " ") continue;
        if(tokens[i] >= "0" && tokens[i] <= "9"){
            let sbuf = "";

            while(i < tokens.length && tokens[i] >= "0" && tokens[i] <= "9"){
                sbuf += tokens[i++];
            }
            num_stack.push(parseInt(sbuf, 10));
            i--;
        }

        else if(tokens[i] == "(") sym_stack.push(tokens[i]);
        
        else if(tokens[i] == ")"){
            while(sym_stack[sym_stack.length - 1] != "("){
                num_stack.push(computeOperation(sym_stack.pop(), num_stack.pop(), num_stack.pop()));
            }
            sym_stack.pop();
        }
        else if(tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/"){
            while(sym_stack.length > 0 && hasPrecedence(tokens[i], sym_stack[sym_stack.length - 1])){
                num_stack.push(computeOperation(sym_stack.pop(), num_stack.pop(), num_stack.pop()));
            }
            sym_stack.push(tokens[i]);
        }
    }

    while(sym_stack.length > 0){
        num_stack.push(computeOperation(sym_stack.pop(), num_stack.pop(), num_stack.pop()));
    }
    return num_stack.pop();
}

function hasPrecedence(op1, op2){
    if(op2 == "(" || op2 == ")"){
        return false;
    }
    if((op1 == "*" || op1 == "/") && (op1 == "+" || op1 == "-")){
        return false;
    }
    else{
        return true;
    }
}

function computeOperation(sym, num1, num2){
    switch(sym){
        case "+":
            return num2 + num1;
        case "-":
            return num2 - num1;
        case "*":
            return num2 * num1;
        case "/":
            if(num1 == 0) console.log("cannot divide by 0");
            return parseInt(num2 / num1, 10);
    }
    return 0;
}

console.log(compute("212 * ( 65 + 12 )"));