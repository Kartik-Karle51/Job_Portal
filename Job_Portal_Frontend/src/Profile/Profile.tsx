import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'

const Profile = (props: any) => {
    const skills = props.skills || ['React', 'Spring Boot']; // use default if props.skills is undefined
    const experience = props.experience || [];
    const certifications = props.certifications || [];
    const [edit, setEdit] = useState([]);
  
    return (
      <div className="w-2/3">
        <div className="relative">
          <img src="/Icons/Banner.png" alt="" className="rounded-t-2xl" />
          <img
            src="/Icons/avatar1.png"
            alt=""
            className="rounded-full w-48 h-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          />
        </div>
  
        <div className="px-3 mt-20">
          <div className="text-3xl font-semibold flex justify-between">
            {props.name}{' '}
            <Button color="bright-sun.4" variant="light">
              Message
            </Button>
          </div>
          <div className="text-xl flex gap-1 items-center">
            <IconBriefcase stroke={1.5} className="h-5 w-5" />
            {props.role} &bull; {props.company}
          </div>
          <div className="flex items-center gap-1 text-lg text-mine-shaft-300">
            <IconMapPin stroke={1.5} className="h-5 w-5" />
            {props.location}
          </div>
        </div>
  
        <Divider my={'xl'} mx="xs" />
  
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3">About</div>
          <div className="text-sm text-mine-shaft-300 text-justify">{props.about}</div>
        </div>
  
        <Divider my="xl" mx="xs" />
  
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3">Skills</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
  
        <Divider my={'xl'} mx="xs" />
  
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5">Experience</div>
          <div className="flex flex-col gap-8">
            {experience.map((exp: any, index: any) => (
              <ExpCard {...exp} key={index} />
            ))}
          </div>
        </div>
  
        <Divider my={'xl'} mx="xs" />
  
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5">Certifications</div>
          <div className="flex flex-col gap-8">
            {certifications.map((cert: any, index: any) => (
              <CertiCard {...cert} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };
export default Profile;  