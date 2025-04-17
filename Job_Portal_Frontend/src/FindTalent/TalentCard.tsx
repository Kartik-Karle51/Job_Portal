import { Avatar, Button, Divider, Text } from '@mantine/core'
import {IconHeart, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const TalentCard = (props:any) => {
  return (
    <div className='bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yelllow] !shadow-bright-sun-400'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-full'>
            <Avatar src={`/Icons/${props.image}.png`}alt="" className='h-7 rounded-md' size={'lg'} />
          </div>
          <div>
            <div className='font-semibold text-lg'>{props.name}</div>
            <div className='text-smtext-mine-shaft-300'>{props.role} &#x2022; {props.company}</div>
          </div>
        </div>
        <div><IconHeart className='text-mine-shaft-300 cursor-pointer'/></div>
      </div>
      <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs'>
      {props.topSkills?.map((skill:any,index:any)=>(
          <div>{skill}</div>
        ))}
      </div>
      <Text lineClamp={3} className='!text-xs text-justify !text-mine-shaft-300'>
      {props.about}
      </Text>
       <Divider color='mine-shaft.7' size="md"/>
      <div className='flex justify-between'>
        <div className='font-semibold text-mine-shaft-200'>{props.expectedCtc}</div>
        <div className='flex items-center gap-1 text-xs text-mine-shaft-400'>
         <IconMapPin stroke={1.5} className='h-5 w-5'/>{props.location}
        </div>
      </div>
      <Divider color='mine-shaft.7' size="md"/>
      <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
        <Link to="/talent-profile">
        <Button color='bright-sun.4' fullWidth variant='outline'>Profile</Button>
        </Link>
        <div>
        <Button color='bright-sun.4' fullWidth variant='light'>Message</Button>
        </div>
      </div>
    </div>
  )
}

export default TalentCard