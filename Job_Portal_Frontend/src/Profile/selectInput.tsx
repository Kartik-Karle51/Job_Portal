import { useEffect, useState } from 'react';

import { Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';





 const SelectInput=(props:any)=> {

useEffect(()=>{ 

setData(props.options);
setValue(props.form.getInputProps(props.name).value);

setSearch(props.form.getInputProps(props.name).value);

}, [])

const combobox = useCombobox({ onDropdownClose:()=>combobox.resetSelectedOption(),

});


const [data, setData]=useState<string[]>([]);

const [value, setValue] = useState<string | null>(null);


const [search, setSearch] = useState('');



const exactOptionMatch = data.some((item) => item === search);

 const filteredOptions=exactOptionMatch
    
     ? data
    : data.filter((item)=>item?.toLowerCase().includes (search.toLowerCase().trim()));
       const options = filteredOptions.map((item)=>(
    <Combobox.Option value={item} key={item}>
{item}
</Combobox.Option>
 ));

 return (

    
    <Combobox={combobox}

    
    withinPortal={false}
    
    onOptionSubmit={(val)=>
    {
        if(val==='$create')
        {
            setData(current) => [...current, search]);
    
            setValue(search); 
            useProps.form.setFieldValue(props.name,search);
        }
        else {
    
            setValue(val);
            
            setSearch(val);}
            useProps.form.setFieldValue(props.name,val);
            
            Combobox.closeDropdown();
    
        }}
 
    >
        
       
            
            <Combobox.Target>
            <InputBase {...props.form.getInputProps(props.name)}
            label={props.label} withAsterisk
            rightSection={<Combobox.Chevron/>}
           rightSection={Combobox}       
           leftSection={<props.leftSection classNae=" stroke={1.5"}/>}
           value={search}
           onChange={(event)=>{
            Combobox.openDropdown();
            Combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);

           }}
           onClick={()=> Combobox.openDropDown()}
           onFocus={()=>Combobox.openDropDown()}
           onBlur={()=>{
            Combobox.closeDropdown();
            IconSettingsSearch(value || '');
           }}

           placeholder={props.placeholder}
           rightSectionPointerEvents="none"
           />
           </Combobox.Target>
           <Combobox.Dropdown>
            <Combobox.Option>
                <scrollbars.Autosize mah={200} type="scroll">

                </scrollbars.Autosize>
            </Combobox.Option>
           </Combobox.Dropdown>