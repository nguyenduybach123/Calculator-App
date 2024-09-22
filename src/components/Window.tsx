import React from 'react'
import { useGlobalContext } from '../context/GlobalContext.tsx';
import cn from 'classnames';

export const Window = () => {
  const { expressionString, resultExpression } = useGlobalContext();

  return (
    <div className='relative value flex flex-col justify-center items-center'>
      <input className='w-full border-none outline-none bg-transparent' value={expressionString} />
      <div className={cn("absolute -bottom-1 right-2 text-2xl",(resultExpression || resultExpression === 0) ? "block" : "hidden")}> = {resultExpression}</div>
    </div>
  )
}
