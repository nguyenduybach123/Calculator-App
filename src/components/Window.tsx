import React from 'react'
import { useGlobalContext } from '../context/GlobalContext.tsx';
import { ExpressionChain } from './ExpressionChain.tsx';



export const Window = () => {

  const { expressionArray } = useGlobalContext();

  console.log(expressionArray)

  return (
    <div className='value flex flex-col justify-center items-center'>
      <div className='w-full'>
        <ExpressionChain chain={expressionArray} />
      </div>
    </div>
  )
}
