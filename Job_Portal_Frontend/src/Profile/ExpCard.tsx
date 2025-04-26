<<<<<<< HEAD
import { IconBookmark } from '@tabler/icons-react'
import React from 'react'

const ExpCard = (props:any) => {
  return (
    <div className='flex flex-col gap-2'>
=======
import { Button } from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpInput from './ExpInput';

const ExpCard = (props:any) => {
  const [edit,setEdit]=useState(false);
  return (
    !edit?<div className='flex flex-col gap-2'>
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
        <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'>
            <img src={`/Icons/${props.company}.png`} alt="" className='h-7 rounded-md' />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold'>{props.title}</div>
            <div className='text-sm text-mine-shaft-300'>{props.company} &#x2022; {props.location}</div>
          </div>
        </div>
       <div className='text-sm text-mine-shaft-300'>
        {props.startDate} - {props.endDate}
       </div>
    </div>
    <div className='text-sm text-mine-shaft-300 text-justify'>
       {props.description}
    </div>
<<<<<<< HEAD
    </div>
=======
    {props.edit && <div className='flex gap-5'>
      <Button color='bright-sun.4' variant='outline' onClick={()=>setEdit(true)}>Edit</Button>
      <Button color='red.8' variant='light'>Delete</Button>

    </div>}
    </div>:<ExpInput setEdit={setEdit}/>
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
  )
}

export default ExpCard