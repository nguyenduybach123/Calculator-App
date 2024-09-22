
const operatorPriority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
}

export const convertStringToExpressionArray = (expression: string) => {
    const tokens: Array<string | number> = [];
    let num = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        
        if (!isNaN(parseFloat(char)) || char === '.') {
            num += char;
        } else {
            if (num !== '') {
                tokens.push(parseFloat(num));
                num = '';
            }
            tokens.push(char);
        }
    }

    if (num !== '') {
        tokens.push(parseFloat(num));
    }

    return tokens;
}

const convertExpressionArrayToPosfix = (expressionArray: Array<string | number>) => {
    const stackExp: Array<string | number> = [];
    const queueExp: Array<string | number> = [];

    expressionArray.forEach(exp => {
        if(typeof exp === 'number') {
            queueExp.push(exp);
        }
        else if (typeof exp === 'string') {
            if( stackExp.length !== 0 && (operatorPriority[exp] > operatorPriority[stackExp[stackExp.length - 1]])) {
                let valueTopStack = stackExp.pop();
                stackExp.push(exp);
                stackExp.push(valueTopStack || 0);
            }
            else {
                stackExp.push(exp)
            }
        }
    })

    while(stackExp.length !== 0) {
        queueExp.push(stackExp.pop() || 0);
    }

    return queueExp;
}


export const calculateExpression = (expression: string) => {
    const stackNumber: Array<number> = [];
    const expressionArr: Array<string | number> = convertStringToExpressionArray(expression);
    const posfix: Array<string | number> = convertExpressionArrayToPosfix(expressionArr);

    console.log(expressionArr);
    console.log(posfix);
    for(let i = 0; i < posfix.length; i++) {
        if(typeof posfix[i] === 'number')
            stackNumber.push(posfix[i] as number);
        else {
            if(stackNumber.length - 1 <= 0)
                return NaN;

            const numCalculated = stackNumber.pop() || 0;
            const numCalculate = stackNumber.pop() || 0;

            switch(posfix[i]) {
                case '+':
                    stackNumber.push(numCalculate + numCalculated);
                    break;
                case '-':
                    stackNumber.push(numCalculate - numCalculated);
                    break;
                case '*':
                    stackNumber.push(numCalculate * numCalculated);
                    break;
                case '/':
                    if(numCalculated === 0)
                        return NaN;

                    stackNumber.push(numCalculate / numCalculated);
                    break;    
            }
        }
    }
    return stackNumber[0];
}