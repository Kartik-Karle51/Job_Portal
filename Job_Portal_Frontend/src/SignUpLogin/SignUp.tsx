
<<<<<<< HEAD
import { Anchor, Button, Checkbox,LoadingOverlay,PasswordInput, RadioGroup, rem, TextInput } from '@mantine/core';
=======
import { Anchor, Button, Checkbox,PasswordInput, RadioGroup, rem, TextInput } from '@mantine/core';
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Radio, Group } from '@mantine/core';
import { registerUser } from '../Services/UserService';
import { signUpValidation } from '../Services/fromValidation';
import { notifications } from '@mantine/notifications';
import { setTimeout } from 'timers/promises';






const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT"
}
const SignUp=(props:any)=>
    
    {
        
        const [data,setData]=useState<{[key:string]:string}>(form);
       const[formError, setFormError]=useState<{[key:string]:string}>(form);
       const navigate=useNavigate();
<<<<<<< HEAD
       const[loading,setLoading]=useState(false);
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
        const handleChange=(event:any)=>{
           
            if(typeof(event)=="string"){ setData({...data, accountType:event});
            return;    
        }
        let name=event.target.name,
         value=event.target.value;

        setData({...data, [name]:value})
        setFormError({...formError, [name]:signUpValidation(name,value)})
        
        if(name==="confirmPassword")
        {
            if(data.password!==value)setFormError({...formError,[name]:"Password do not match."})
        }
    }
        const handleSubmit=()=>{
<<<<<<< HEAD
            
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
            let valid=true, newFormError:{[key:string]:string}={};
            for(let key in data)
            {
                if(key==="accountType")continue;
                if(key!=="confirmPassword")newFormError[key]=signUpValidation(key, data[key]);
                else if(data[key]!==data["password"])newFormError[key]="Password do not match.";
                if(newFormError[key])valid=false;
            }
           
            if(valid===true)
<<<<<<< HEAD
                setLoading(true);
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
  
            registerUser(data).then((res)=>{
            console.log(res);
            setFormError(newFormError);
            setData(form);
            notifications.show({
                title: 'Registered Successfully',
                message:'Redirecting to login page...',
                withCloseButton: true,
                icon:<IconCheck style={{width:"90%", height:"90%"}}></IconCheck>,
                color:"teal",
                withBorder:true,
                className:"!border-green-500"

            })
            window.setTimeout(() => {
<<<<<<< HEAD
                setLoading(false);
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
                navigate("/login");
            }, 4000);
            

        }).catch((err)=>{
<<<<<<< HEAD
            setLoading(false);
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
            notifications.show({
                title: 'Registration Failed',
                message:err.response.data.errorMessage,
                withCloseButton: true,
                icon:<IconX style={{width:"90%", height:"90%"}}></IconX>,
                color:"red",
                withBorder:true,
                className:"!border-red-500"

            })
            
        });
    
    }
<<<<<<< HEAD
        return<>
             
             
             <LoadingOverlay
              visible={loading}
              zIndex={1000}
              className="translate-x-1/2"
              overlayProps={{ radius: 'sm', blur: 2 }}
              loaderProps={{ color: 'pink', type: 'bars' }}
            /><div className="w-1/2 px-20 flex flex-col justify-center gap-3">
=======
        return<div className="w-1/2 px-20 flex flex-col justify-center gap-3">
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput value={data.name} name='name' error={formError.name} onChange={handleChange} withAsterisk label="Full Name" placeholder='Your name'
              />
            <TextInput value={data.email} error={formError.email} name='email' onChange={handleChange} withAsterisk leftSection={<IconAt style={{width: rem(16), 
                height: rem(16)}} />} label="Your email" placeholder="Your email" />

            <PasswordInput value={data.password} error={formError.password} name='password'onChange={handleChange} leftSection={<IconLock style={{width: rem(18),height: rem(18)}} stroke={1.5} />} 
            label="Password" placeholder='Password'/>

            <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name='confirmPassword' onChange={handleChange} leftSection={<IconLock style={{width: rem(18),height: rem(18)}} stroke={1.5} />} 
            label="Confirm Password" placeholder='Confirm password'/>
            <RadioGroup 
            value={data.accountType}
            onChange={handleChange}
            label="You are?"
            withAsterisk 
            >
                <Group mt="xs">
                    <Radio className='py-4 px-6 border hover:bg-mine-shaft-900 
                    
                    has-[:checked]:border-bright-sun-400  border-mine-shaft-800 rounded-lg' autoContrast value="APPLICANT" label="Applicant"/>
                    <Radio className='py-4 px-6 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg'autoContrast value="EMPLOYER" label="Employer"/>
                </Group>
         </RadioGroup>

            <Checkbox autoContrast label={<> accept{' '}<Anchor>terms & conditions</Anchor></>} />
<<<<<<< HEAD
            <Button loading={loading} onClick={handleSubmit}autoContrast variant="filled">Sign up</Button>
            <div>Have an account? <span onClick={()=>{navigate("/login");setFormError(form); setData(form)}}
             className="text-bright-sun-400 hover:uderline cursor-pointer">Login</span></div>
        </div>
        </>
=======
            <Button onClick={handleSubmit}autoContrast variant="filled">Sign up</Button>
            <div>Have an account? <span onClick={()=>{navigate("/login");setFormError(form); setData(form)}}
             className="text-bright-sun-400 hover:uderline cursor-pointer">Login</span></div>
        </div>

>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
    }
    export default SignUp;