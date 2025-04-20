import { Avatar, Button, Divider, Modal, Text } from '@mantine/core'
import { DateInput, PickerControl, TimeInput } from '@mantine/dates'
import { useDisclosure } from '@mantine/hooks'
import { IconCalendarMonth, IconHeart, IconMapPin } from '@tabler/icons-react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className='bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yelllow] !shadow-bright-sun-400'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-full'>
            <Avatar src={`/Icons/${props.image}.png`} alt="" className='h-7 rounded-md' size={'lg'} />
          </div>
          <div>
            <div className='font-semibold text-lg'>{props.name}</div>
            <div className='text-smtext-mine-shaft-300'>{props.role} &#x2022; {props.company}</div>
          </div>
        </div>
        <div><IconHeart className='text-mine-shaft-300 cursor-pointer' /></div>
      </div>
      <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs'>
        {props.topSkills?.map((skill: any, index: any) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <div>
      <Text lineClamp={3} className='!text-xs text-justify !text-mine-shaft-300'>
        {props.about}
      </Text>
      </div>
     
      <Divider color='mine-shaft.7' size="xs" />
      {
        props.invited ? <div className='flex gap-1 text-mine-shaft-200 text-sm items-center'>
          <IconCalendarMonth stroke={1.5}/> Interview : August 27 ,2024 10:00
        </div>:<div className='flex justify-between'>
        <div className='font-semibold text-mine-shaft-200'>{props.expectedCtc}</div>
        <div className='flex items-center gap-1 text-xs text-mine-shaft-400'>
          <IconMapPin stroke={1.5} className='h-5 w-5' />{props.location}
        </div>
      </div>
      }
      
      
      <Divider color='mine-shaft.7' size="md" />
      <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
        {
          !props.invited &&<>
          <Link to="/talent-profile">
          <Button color='bright-sun.4' fullWidth variant='outline'>Profile</Button>
        </Link>
        <div>
          {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className='w-5 h-5' />} color='bright-sun.4' fullWidth variant='light'>Schedule</Button> : <Button color='bright-sun.4' fullWidth variant='light'>Message</Button>}
        </div>
          </>
        }
        {
          props.invited && <>
          <div>
          <Button color='bright-sun.4' fullWidth variant='outline'>Accept</Button>

            </div>
            <div>
            <Button color='bright-sun.4' fullWidth variant='light'>Reject</Button>

            </div>
            
            </>
        }
      </div>
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className='flex flex-col gap-4'>
          <DateInput minDate={new Date()} value={value} onChange={setValue} label="Date" placeholder='Enter Date' />
          <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
          <Button color='bright-sun.4' fullWidth variant='light'>Schedule</Button>
        </div>
      </Modal>
    </div>
  )
}

export default TalentCard