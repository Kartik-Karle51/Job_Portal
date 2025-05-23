import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconAdjustments, IconBookmark, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/JobDescData'
import DOMPurify from "dompurify"


const JobDesc = (props:any) => {
  const data = DOMPurify.sanitize(desc); {/*DOMPurify takes raw HTML and cleans out any scripts, malicious attributes, or tags that could be used for XSS attacks, without affecting safe formatting. */ }
  return (
    <div className='w-2/3'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-3 bg-mine-shaft-800 rounded-xl'>
            <img src="/Icons/Google.png" alt="" className='h-14 rounded-md' />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-semibold text-2xl'>Software Engineer III</div>
            <div className='text-lg text-mine-shaft-300'>Google &bull; 3 Days Ago &bull; 48 Applicants</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <Link to="/apply-jobs">
            <Button color='bright-sun.4' size='sm' variant='light'>{props.edit?"Edit":"Apply"}</Button>
          </Link>

          {props.edit? <Button color='red.5' size='sm' variant='light'>Delete</Button>:<IconBookmark className='text-bright-sun-400 cursor-pointer' />}
        </div>

      </div>
      <Divider my="xl" />
      <div className='flex justify-between'>
        {
          card.map((item: any, index: any) => <div key={index} className='flex flex-col items-center gap-1'>
            <ActionIcon color='bright-sun.4' className='!h-12 !w-12' variant='light' radius="xl" aria-label='Settings'>
              <item.icon className='h-4/5 w-4/5' stroke={1.5} />
            </ActionIcon>
            <div className='text-sm text-mine-shaft-300'>{item.name}</div>
            <div className='font-semibold '>{item.value}</div>
          </div>)
        }

      </div>
      <Divider my="xl" />
      <div>
        <div className='text-xl font-semibold mb-5'>Required Skills</div>
        <div className='flex flex-wrap gap-2'>
          {
            skills.map((skill, index) =>
              <ActionIcon color='bright-sun.4' className='!h-fit !w-fit font-medium !text-sm' variant='light' radius="xl" p="xs" aria-label='Settings' key={index}>
                {skill}
              </ActionIcon>
            )
          }
        </div>
      </div>
      <Divider my="xl" />
      <div className='[&_*]:text-mine-shaft-300 [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-1' dangerouslySetInnerHTML={{ __html: data }}>
        {/* Using dangerouslySetInnerHTML tells React: “I know this HTML came from somewhere else, but trust me, just render it.” And that’s risky. */}
      </div>
      <Divider my="xl" />
      <div>
        <div className='text-xl font-semibold mb-5'>About Company</div>
        <div>
          <div className='flex justify-between mb-3'>
            <div className='flex gap-2 items-center'>
              <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                <img src="/Icons/Google.png" alt="" className='h-8 rounded-md' />
              </div>
              <div className='flex flex-col'>
                <div className='font-medium text-lg'>Google</div>
                <div className='text-mine-shaft-300'>10K+ Employees</div>
              </div>
            </div>
            <Link to="/company">
              <Button color='bright-sun.4' variant='light'>Company Page</Button>
            </Link>
          </div>
          <div className='text-mine-shaft-300 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam inventore sapiente distinctio officiis libero adipisci modi, omnis rerum quaerat cum optio neque animi perspiciatis, impedit doloribus sunt eum ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque quo ex expedita numquam placeat, temporibus voluptatibus tempore hic earum autem dolore laudantium amet illo, dicta quas, assumenda nulla harum?
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDesc