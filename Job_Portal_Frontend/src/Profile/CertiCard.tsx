<<<<<<< HEAD
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
    
=======
import { ActionIcon } from '@mantine/core'
import { IconBookmark, IconPencil, IconTrash } from '@tabler/icons-react'
import React from 'react'

const CertiCard = (props: any) => {
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
      <div className='flex items-center gap-2'>
        <div className='flex flex-col items-end'>
          <div className='text-sm text-mine-shaft-300'> {props.issueDate}</div>
          <div className='text-sm text-mine-shaft-300'>ID : {props.certificationId}</div>
        </div>
{ props.edit && <ActionIcon size="lg" color='red.8' variant='subtle'>
<IconTrash className='h-4/5 w-4/5'stroke={1.5}/>
</ActionIcon>}
      </div>

    </div>

>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
  )
}

export default CertiCard