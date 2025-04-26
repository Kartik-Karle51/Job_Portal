<<<<<<< HEAD
import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from '@mantine/core';
=======
import { Button, PasswordInput, rem, TextInput } from '@mantine/core';
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../Services/UserService';
import { useState } from 'react';
import { loginValidation } from '../Services/fromValidation';
import { error } from 'console';
import { notifications } from '@mantine/notifications';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/UserSlice';
import { useDisclosure } from '@mantine/hooks';
import ResetPassword from './ResetPassword';
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
const form={
   
    email:"",
    password:"",
   
}


const Login=()=>
{
<<<<<<< HEAD
    const [loading,setLoading]=useState(false);
      const dispatch=useDispatch();
            const [data,setData]=useState<{[key:string]:string}>(form);
             const[formError, setFormError]=useState<{[key:string]:string}>(form);
             const [opened, { open, close }] = useDisclosure(false);
=======
      
            const [data,setData]=useState<{[key:string]:string}>(form);
             const[formError, setFormError]=useState<{[key:string]:string}>(form);
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
             const navigate=useNavigate();
            const handleChange=(event:any)=>{
               setFormError({...formError, [event.target.name]:""});
                console.log(event.target);
          
                 setData({...data, [event.target.name]:event.target.value})
            }
            const handleSubmit=()=>{
<<<<<<< HEAD
                setLoading(true);
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
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
<<<<<<< HEAD
                            setLoading(false);
                            dispatch(setUser(res.data));
                            navigate("/login");               ///////////////////////////////////
=======
                            navigate("/login");
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
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
<<<<<<< HEAD
     return <>
     
     
     <LoadingOverlay
      visible={loading}
      zIndex={1000}
      overlayProps={{ radius: 'sm', blur: 2 }}
      loaderProps={{ color: 'pink', type: 'bars' }}
    /><>
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
=======
     return<div className="w-1/2 px-20 flex flex-col justify-center gap-3">
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
                <div className="text-2xl font-semibold">Create Account</div>
             
                <TextInput value={data.email} name='email' error={formError.email} onChange={handleChange} withAsterisk leftSection={<IconAt style={{width: rem(16), 
                    height: rem(16)}} />} label="Your email" placeholder="Your email" />
    
                <PasswordInput value={data.password} error={formError.password} name='password'onChange={handleChange} leftSection={<IconLock style={{width: rem(18),height: rem(18)}} stroke={1.5} />} 
                label="Password" placeholder='Password'/>
    
                
<<<<<<< HEAD
                <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign up</Button>
                <div>Dont have an account? <span onClick={()=>{navigate("/signup");setFormError(form); setData(form)}} 
                className="text-bright-sun-400 hover:uderline cursor-pointer">SignUp</span></div>
            <div onClick={open}
            className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password</div>
            </div>
            <ResetPassword opened={opened} close={close}/>
            </>

    </>
=======
                <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
                <div>Dont have an account? <span onClick={()=>{navigate("/signup");setFormError(form); setData(form)}} 
                className="text-bright-sun-400 hover:uderline cursor-pointer">SignUp</span></div>
            </div>
    
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
}
export default Login;