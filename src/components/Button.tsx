import React from 'react'
import cx from 'classnames'

type CalculatorButton = {
  text: string,
  type?: 'None' | 'AC' | 'Plus' | 'Equal'
}

export const Button = ({text, type = 'None'}: CalculatorButton) => {
  return (
    <div className={cx('rounded-md p-2 btn', {clear: type === 'AC', plus: type === 'Plus', equal: type === 'Equal'})}>
        <i>{text}</i>
    </div>
  )
}
