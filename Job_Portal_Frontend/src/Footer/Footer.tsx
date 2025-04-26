import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconBriefcase } from '@tabler/icons-react'
import React from 'react'
import Data from '../Data/Data';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location=useLocation();
    const {footerLinks}=Data();
    
<<<<<<< HEAD
    return location.pathname!="/signup" && location.pathname!="/login" ? <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 
    flex justify-between items-center font-['poppins']">
=======
    return location.pathname!="/signup" && location.pathname!="/login" ? <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303

   
        <div className='w-1/4 flex flex-col gap-4'>
        <div className="flex gap-1 items-center text-bright-sun-400">
            <IconBriefcase className="h-6 w-6" stroke={2.5} />
                <div className="text-xl font-semibold">DreamHire</div>
        </div>
            <div className='text-sm text-mine-shaft-300'>
                Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
            </div>
            <div className='flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700'>
                <div><IconBrandFacebook /></div>
                <div><IconBrandInstagram /></div>
                <div><IconBrandWhatsapp /></div>
            </div>
        </div>
        {
            footerLinks.map((item,index)=> <div key={index}>
                <div className='text-lg font-semibold mb-4 text-bright-sun-400'>{item.title}</div>
                {
                    item.links.map((link,index)=><div key={index} className='text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out'>{link}</div>)
                }
                
                </div>)
        }
        
  </div>:<></>
}

export default Footer