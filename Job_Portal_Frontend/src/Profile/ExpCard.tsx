import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'  // <-- import useState
import { formatDate } from '../Services/Utilities'
import { Button } from '@mantine/core'
import ExpInput from './ExpInput'

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);  // <-- define state for editing

  return (
    !edit ? (
      <div className='flex flex-col gap-2'>
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
            {formatDate(props.startDate)} - {formatDate(props.endDate)}
          </div>
        </div>
        <div className='text-sm text-mine-shaft-300 text-justify'>
          {props.description}
        </div>
        {props.edit && (
          <div className='flex gap-5'>
            <Button color='bright-sun.4' variant='outline' onClick={() => setEdit(true)}>Edit</Button>
            <Button color='red.8' variant='light'>Delete</Button>
          </div>
        )}
      </div>
    ) : (
      <ExpInput setEdit={setEdit} />  // <-- This will render the ExpInput component when `edit` is true
    )
  );
}

export default ExpCard;
