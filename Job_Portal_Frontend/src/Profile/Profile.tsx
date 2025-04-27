import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core'
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlug, IconPlus } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import SelectInput from './SelectInput'
import fields from '../Data/Profile'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../Services/ProfileService'
import Info from './Info'

const Profile = (props: any) => {
const dispatch=useDispatch();
  const user=useSelector((state:any)=>state.user);
const profile=useSelector((state:any)=>state.profile);
  const [skills, setSkills] = useState(props.skills);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addexp,setAddExp]=useState(false);
  const [addCert,setAddCert]=useState(false);
  const [value, setValue] = useState('As a SoftWare Engineer at Google, I specialize in building scalable and high-performance applications.My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences.With a strong foundation in React and SpringBoot , and a focus in MongoDB for database solutions,I am passionate about leveraging the latest technologies to solve complex problems and drive innovation.My goal is to create impactful software that enhances productivity and meets user needs effectively.');

  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);

  }
  useEffect(()=>{
    console.log(profile);
getProfile(user.id).then((data:any)=>
{
  dispatch.setProfile(data);
  console.log(data);
}).catch((error:any)=>
{
 console.log(error);
});
},[])

  

  return (
    <div className='w-4/5 mx-auto'>
      <div className='relative'>
        <img src="/Icons/Banner.png" alt=""
          className='w-full h-64 object-cover rounded-t-2xl' />
        <img src="/Icons/avatar1.png" alt="" className='rounded-full w-48 h-48 -bottom-1/3 
        absolute left-3 border-mine-shaft-950 border-8' />

      </div>
      <div className='px-3 mt-20'>
       <Info/>
</div>

     


      <Divider my={'xl'} mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>About 
          <ActionIcon variant='subtle' size="lg" color='bright-sun.4' onClick={() => handleEdit(1)}> {edit[1] ? <IconDeviceFloppy className='h-4/5 w-4/5 ' />
           : <IconPencil className='h-4/5 w-4/5 ' />}</ActionIcon></div>
        {

          edit[1] ? <>   <Textarea autosize minRows={3} value={value} 
          onChange={(event) => setValue(event.target.value)} /> </> : <>
            <div className='text-sm text-mine-shaft-300 text-justify'>
              {/* {profile.about} */}
            </div>
          </>

        }

      </div>
      <Divider my='xl' mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills <ActionIcon variant='subtle' size="lg" color='bright-sun.4' onClick={() => handleEdit(2)}> {edit[2] ? <IconDeviceFloppy className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}</ActionIcon></div>

        {
          edit[2] ? <> <TagsInput value={skills} onChange={setSkills} placeholder='Add Skill' splitChars={[',', ' ', ' |']} /></> : <>
            <div className='flex flex-wrap gap-2'>

              {
              profile?.skills?.map((skill: any, index: number) =>
                <div key={index} className='bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium'>{skill}</div>
              )}

            </div></>
        }


      </div>
      <Divider my={'xl'} mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience <div className='flex gap-2'>
          <ActionIcon onClick={() =>setAddExp(true)} variant='subtle' size="lg" color='bright-sun.4'>
            <IconPlus className='h-4/5 w-4/5 ' />
          </ActionIcon>
          <ActionIcon variant='subtle' size="lg" color='bright-sun.4' onClick={() => handleEdit(3)}>
            {edit[3] ? <IconDeviceFloppy className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
          </ActionIcon></div></div>
        <div className='flex flex-col gap-8'>
          {props?.experience?.map((exp: any, index: number) => <ExpCard {...exp} key={index} edit={edit[3]} />)}
          {addexp && <ExpInput setEdit={setAddExp} add/>}
        </div>

      </div>
      <Divider my={'xl'} mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications<div className='flex gap-2'>
          <ActionIcon onClick={() =>setAddCert(true)} variant='subtle' size="lg" color='bright-sun.4'>
            <IconPlus className='h-4/5 w-4/5 ' />
          </ActionIcon>
          <ActionIcon variant='subtle' size="lg" color='bright-sun.4' onClick={() => handleEdit(4)}>
            {edit[4] ? <IconDeviceFloppy className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
          </ActionIcon></div></div>
        <div className='flex flex-col gap-8'>
          {props?.certifications?.map((cert: any, index: number) =>
            <CertiCard {...cert} edit={edit[4]} />
          )}
          {
            addCert && <CertiInput setEdit={setAddCert}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile
