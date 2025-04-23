import React, { useState } from 'react'
import fields from '../Data/Profile'
import SelectInput from './SelectInput'
import { Button, Checkbox, Textarea } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';

const ExpInput = (props:any) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked ,setChecked]=useState(false);

    const select=fields;
    const [value,setValue]=useState("As a software engineer at Google, I am responsible for designing ,developing ,and maintaining scalable software solutions that enhance user experience and improve operatinal efficiency.")
  return (

    <div className='flex flex-col gap-3'>
        <div className='text-lg font-semibold'>{props.add?"Add" :"Edit"} Experience</div>
        <div className='flex gap-10 [&>*]:w-1/2'>
          <SelectInput {...select[0]}/>
          <SelectInput {...select[1]}/>
        
        </div>
        <SelectInput {...select[2]}/> 
        <Textarea withAsterisk label="Summary" autosize minRows={3} value={value} onChange={(event)=>setValue(event.target.value)}/>
        <div className='flex gap-10 [&>*]:w-1/2'>
        <MonthPickerInput withAsterisk
  maxDate={endDate || undefined}
  label="Start Date"
  placeholder="Pick date"
  value={startDate}
  onChange={(v) => setStartDate(v)}
/>

<MonthPickerInput withAsterisk
disabled={checked}
  minDate={startDate || undefined}
  maxDate={new Date()}
  label="End Date"
  placeholder="Pick date"
  value={endDate}
  onChange={(v) => setEndDate(v)}
/>
</div>
<Checkbox autoContrast label="Currently Working here" checked={checked} onChange={(event)=>setChecked(event.currentTarget.checked)}/>
<div className='flex gap-5'>
      <Button color='bright-sun.4' variant='outline' onClick={()=>props.setEdit(false)}>Save</Button>
      <Button color='red.8'  onClick={()=>props.setEdit(false)} variant='light'>Cancel</Button>

    </div>

    </div>
  )
}

export default ExpInput;