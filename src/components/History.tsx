import React from 'react'
import cn from 'classnames'
import useGlobalContext from '../context/GlobalContext.tsx'
import { calculateExpression } from '../service/CalculatorExpression.ts';

export const History = () => {
    const { 
        isOpenHistory, setIsOpenHistory,
        historyExpression, setHistoryExpression,
        setExpressionString,
        setResultExpression
    } = useGlobalContext();

    const handleSelectHistory = (expression: string) => {
        setIsOpenHistory(false);
        setExpressionString(expression);
        const result = calculateExpression(expression)
        setResultExpression(result || 0)
    }

    return (
        <>
            <div className='absolute top-4 left-4 px-3 py-2 cursor-pointer text-white font-semibold active:brightness-150 rounded-md shadow-sm z-10' style={{background: 'linear-gradient(90deg, #2d2d2d, #4d4d4d)'}}
                 onClick={() => setIsOpenHistory(true)}
            >
                History
            </div>
            <div className={cn('absolute top-0 left-0 flex justify-center items-center w-full h-full z-20', (isOpenHistory) ? 'block' : 'hidden')}>
                <div className='relative p-3 min-w-72 min-h-80 round-lg rounded-md shadow-xl bg-neutral-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={30} height={30} fill='white'
                         className='absolute right-0 top-0 cursor-pointer'
                         onClick={() => setIsOpenHistory(false)}>
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                    <ul className='mt-8'>
                    {
                        historyExpression.map(history => (
                            <li className='font-semibold text-white text-xl p-2 my-2 rounded-md cursor-pointer active:brightness-150 hover:brightness-50' style={{background: 'linear-gradient(90deg, #2d2d2d, #4d4d4d)'}}
                                onClick={() => handleSelectHistory(history)}
                            >
                                {history}
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </>
    )
}
