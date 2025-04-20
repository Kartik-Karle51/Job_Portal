import { IconBookmark } from '@tabler/icons-react'
import React from 'react'

const CertiCard = (props:any) => {
  return (
        <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'>
            <img src={`/Icons/${props.issuer}.png`} alt="" className='h-7 rounded-md' />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold'>{props.name}</div>
            <div className='text-sm text-mine-shaft-300'>{props.issuer}</div>
          </div>
        </div>
       <div className='flex flex-col items-end'>
        <div className='text-sm text-mine-shaft-300'> {props.issueDate}</div>
        <div className='text-sm text-mine-shaft-300'>ID : {props.certificationId}</div>
       </div>
    </div>
    
  )
}

export default CertiCard