import React from 'react'
import { Button } from './Button.tsx';


const calculatorChars = ['AC','/','*','7','8','9','-','4','5','6','+','1','2','3','0','.','='];
const specialChars = {
  'AC': 'AC',
  '+': 'Plus',
  '=': 'Equal'
}

export const Table = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-2 rounded-md'>
    {
        calculatorChars.map((char) => (
          <Button text={char} type={specialChars[char] ? specialChars[char] : 'None'} />
        ))
    }
    </div>
  )
}
