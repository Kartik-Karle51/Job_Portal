import { Button, Divider, Text } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props:any) => {
    return (
        <Link to="/jobs" className='bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yelllow] !shadow-bright-sun-400'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <div className='p-2 bg-mine-shaft-800 rounded-md'>
                <img src={`/Icons/${props.company}.png`} alt="" className='h-7 rounded-md' />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='font-semibold'>{props.jobTitle}</div>
                <div className='text-xs text-mine-shaft-300'>{props.company} &#x2022; {props.applicants} Applicants</div>
              </div>
            </div>
          {props.saved?<IconBookmarkFilled className='text-bright-sun-400 cursor-pointer' stroke={1.5} />: <IconBookmark className='text-mine-shaft-300 cursor-pointer' stroke={1.5}/>} 
          </div>
          <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs'>
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
          </div>
          <Text lineClamp={3} className='!text-xs text-justify !text-mine-shaft-300'>
           {props.description}
          </Text>
           <Divider color='mine-shaft.7' size="xs"/>
          <div className='flex justify-between'>
            <div className='font-semibold text-mine-shaft-200'>&#8377;{props.package}</div>
            <div className='flex items-center gap-1 text-xs text-mine-shaft-400'>
             <IconClockHour3 stroke={1.5} className='h-5 w-5'/>{props.applied?"Applied":props.offered?"Interviewed":"Posted"} {props.postedDaysAgo} Days ago 
            </div>
          </div>
          {
          (props.offered || props.interviewing)&& <Divider color='mine-shaft.7' size="xs"/> 
          }
          {
          props.offered &&  <div className='flex gap-2'>
                <Button color='bright-sun.4' variant='outline' fullWidth>Accept</Button>
                <Button color='bright-sun.4' variant='light' fullWidth>Reject</Button>

            </div>
          }

          {
            props.interviewing && <div className='flex gap-1 text-sm items-center'>
                <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5}/>Sun, 25 August &bull; <span className='text-mine-shaft-400'>10:00 AM</span>
            </div>
          }
        </Link>
      )
}

export default Card