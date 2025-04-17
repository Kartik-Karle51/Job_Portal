import React, { useState } from 'react'

import { dropdownData } from '../Data/JobsData'
import { Divider, Input, RangeSlider } from '@mantine/core'
import MultiInput from '../FindJobs/MultiInput';
import { searchFields } from '../Data/Talentdata';
import { IconUserCircle } from '@tabler/icons-react';

const SearchBar = () => {
  const [value,setvalue]=useState<[number,number]>([1,100]);
  return (
    <div className='flex px-5 py-8 items-center !text-mine-shaft-100 '>
      <div className='flex items-center'>
        <div  className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2'><IconUserCircle size={20}/></div>
        <Input variant='unstyled' placeholder='Talent Name' className='[&_input]:!placeholder-mine-shaft-200'/>
      </div>
        {
            searchFields.map((item,index)=><><div key={index} className='w-1/5 hover:[&_.mantine-PillGroup-group]:cursor-pointer'>
                <MultiInput {...item}/>
            </div>
            <Divider mr="xs" size="xs"orientation='vertical'/>
            </>)
        }
        <div className='w-1/5 '>   {/*[&_.mantine-Slider-label]:!translate-y-10 */}
        <div className='flex justify-between text-sm'>
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
   <RangeSlider size='xs' value={value} onChange={setvalue} color='bright-sun.4' labelTransitionProps={{transition:'skew-down',duration:150,timingFunction:'linear'}} />
   </div>
    </div>
  )
}

export default SearchBar