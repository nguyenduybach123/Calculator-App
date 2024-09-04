import React from 'react'
import { Button } from './Button';

const calculatorChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'C', 'AC'];

export const Table = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-2 rounded-md'>
    {
        calculatorChars.map((char) => (
            <Button text={char} />
        ))
    }
    </div>
  )
}
