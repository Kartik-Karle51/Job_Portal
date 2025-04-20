import { Button, PasswordInput, rem, TextInput } from '@mantine/core';
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../Services/UserService';
import { useState } from 'react';
import { loginValidation } from '../Services/fromValidation';
import { error } from 'console';
import { notifications } from '@mantine/notifications';
const form={
   
    email:"",
    password:"",
   
}


const Login=()=>
{
      
            const [data,setData]=useState<{[key:string]:string}>(form);
             const[formError, setFormError]=useState<{[key:string]:string}>(form);
             const navigate=useNavigate();
            const handleChange=(event:any)=>{
               setFormError({...formError, [event.target.name]:""});
                console.log(event.target);
          
                 setData({...data, [event.target.name]:event.target.value})
            }
            const handleSubmit=()=>{
                let valid=true, newFormError:{[key:string]:string}={};
                for(let key in data)
                {
                    if(key==="accountType")continue;
                    if(key!=="confirmPassword")newFormError[key]=loginValidation(key, data[key]);
                    else if(data[key]!==data["password"])newFormError[key]="Password do not match.";
                    if(newFormError[key])valid=false;
                }
                setFormError(newFormError);
                if(valid===true){
                    loginUser(data).then((res)=>{
                        notifications.show({
                            title: 'Login Successfull',
                            message:'Redirecting to home page...',
                            withCloseButton: true,
                            icon:<IconCheck style={{width:"90%", height:"90%"}}></IconCheck>,
                            color:"teal",
                            withBorder:true,
                            className:"!border-green-500"
            
                        })
                        window.setTimeout(() => {
                            navigate("/login");
                        }, 4000);
                        console.log(res);
                    }).catch((err)=>
                        notifications.show({
                            title: 'Login Failed',
                            message:err.response.data.errorMessage,
                            withCloseButton: true,
                            icon:<IconX style={{width:"90%", height:"90%"}}></IconX>,
                            color:"red",
                            withBorder:true,
                            className:"!border-red-500"
            
                        }));
                }
             
    
            
            }
     return<div className="w-1/2 px-20 flex flex-col justify-center gap-3">
                <div className="text-2xl font-semibold">Create Account</div>
             
                <TextInput value={data.email} name='email' error={formError.email} onChange={handleChange} withAsterisk leftSection={<IconAt style={{width: rem(16), 
                    height: rem(16)}} />} label="Your email" placeholder="Your email" />
    
                <PasswordInput value={data.password} error={formError.password} name='password'onChange={handleChange} leftSection={<IconLock style={{width: rem(18),height: rem(18)}} stroke={1.5} />} 
                label="Password" placeholder='Password'/>
    
                
                <Button onClick={handleSubmit} autoContrast variant="filled">Sign up</Button>
                <div>Dont have an account? <span onClick={()=>{navigate("/signup");setFormError(form); setData(form)}} 
                className="text-bright-sun-400 hover:uderline cursor-pointer">SignUp</span></div>
            </div>
    
}
export default Login;