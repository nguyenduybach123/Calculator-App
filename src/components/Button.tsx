import React from 'react'
import cx from 'classnames'
import { useGlobalContext } from '../context/GlobalContext.tsx'
import { calculateExpression } from '../service/CalculatorExpression.ts'

type CalculatorButtonType = {
  value: string | number,
  type?: 'None' | 'AC' | 'Plus' | 'Equal'
}

export const Button = ({value, type = 'None'}: CalculatorButtonType) => { 
  const { expressionString, setExpressionString, setResultExpression, setHistoryExpression } = useGlobalContext();

  const handleOnClick = () => {
    if(type === 'Equal') {
      const result = calculateExpression(expressionString)
      setResultExpression(result || 0)
      if(!isNaN(result)) {
        setHistoryExpression(prev => [...prev, expressionString]);
      }
      return;
    }

    if(type === 'AC') {
      setExpressionString("");
      return;
    }

    setExpressionString(prev => prev + value)
  }

  return (
    <div className={cx('btn rounded-md w-16 md:w-20 m-2 md:m-1 p-0 lg:p-2', {clear: type === 'AC', plus: type === 'Plus', equal: type === 'Equal'})}
         onClick={handleOnClick}
    >
        <i>{value}</i>
    </div>
  )
}
