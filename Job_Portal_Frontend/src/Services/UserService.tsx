import axios from "axios";
const base_url="http://localhost:8080/users/"
const registerUser=async(user:any)=>
{
    return await axios.post(`${base_url}register`, user)

    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const loginUser=async(login:any)=>
    {
        return axios.post(`${base_url}login`, login)
        .then(res=>res.data)
        .catch(error=>{throw error;});
    }

<<<<<<< HEAD
    const sendOtp=async(email:any)=>
        {
            return axios.post(`${base_url}sendOtp/${email}`, email)
            .then(res=>res.data)
            .catch(error=>{throw error;});
        }
    
        const verifyOtp=async(email:any,otp:any)=>
            {
                return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
                .then(res=>res.data)
                .catch(error=>{throw error;});
            }

            const changePass=async(email:string,password:string)=>
                {
                    return axios.post(`${base_url}changePass`, {email,password})
                    .then(res=>res.data)
                    .catch(error=>{throw error;});
                }
    export {registerUser, loginUser,sendOtp,changePass,verifyOtp};
=======
    export {registerUser, loginUser};
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
