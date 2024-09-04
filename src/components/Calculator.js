import React from 'react'
import { Window } from './Window'
import { Table } from './Table'

export const Calculator = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Window />
        <Table />
    </div>
  )
}
