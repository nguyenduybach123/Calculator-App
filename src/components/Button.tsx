import React from 'react'
import cx from 'classnames'
import { useGlobalContext } from '../context/GlobalContext.tsx'

type CalculatorButtonType = {
  value: string | number,
  type?: 'None' | 'AC' | 'Plus' | 'Equal'
}

export const Button = ({value, type = 'None'}: CalculatorButtonType) => {
  
  const { expressionArray, setExpressionArray, cursorPos, setCursorPos } = useGlobalContext();

  // const getPositionValue = (arr, position) => {
  //   if (position.length === 0) {
  //       return undefined;
  //   }

  //   const [currentPosition, ...rest] = position;

  //   if (Array.isArray(arr) && currentPosition >= 0 && currentPosition < arr.length) {
  //       return getPositionValue(arr[currentPosition], rest);
  //   }

  //   return undefined;
  // }

  // const getPositionDivision = () => {
  //   let distanceDivision = {
  //     leftPos: cursorPos,
  //     rightPos: cursorPos
  //   }
    
  //   while(typeof getPositionValue(expressionArray, cursorPos) === 'number') {
  //     distanceDivision.leftPos[cursorPos.length - 1]--;
  //     if(distanceDivision.leftPos[cursorPos.length - 1] === 0) {
  //       return distanceDivision;
  //     } 
  //   }
    
  //   return distanceDivision;
  // }

  const handleUpdateExpression = () => {
    if(typeof value === 'string') {
      if(value === '/') {
        return [...expressionArray.slice(0,cursorPos), 'numerator', '/', 'denominator', ...expressionArray.slice(cursorPos + 1)];
      }
    }
    setCursorPos(cursorPos + 1);

    return [...expressionArray.slice(0,cursorPos), value, ...expressionArray.slice(cursorPos + 1)];
  }

  return (
    <div className={cx('btn rounded-md w-16 md:w-20 m-2 md:m-1 p-0 lg:p-2', {clear: type === 'AC', plus: type === 'Plus', equal: type === 'Equal'})}
         onClick={() => setExpressionArray(handleUpdateExpression())}
    >
        <i>{value}</i>
    </div>
  )
}
