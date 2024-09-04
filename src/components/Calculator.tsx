import React from 'react'
import { Window } from './Window.tsx'
import { Table } from './Table.tsx'

export const Calculator = () => {
  return (
    <div className='flex flex-col justify-center items-center calculator'>
        <Window />
        <Table />
    </div>
  )
}
