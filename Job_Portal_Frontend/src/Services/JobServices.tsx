import axios from "axios";

// const getAllJobs=async()=>{
//     .then(result=>result.data)
//     .catch(error=>{throw error;});
// }

const getJob =async(id:any)=>{
    return axios.get('${base_url}get/${id}')
    .then(result=>result.data)
    .catch(error=>{throw error;});
}

const applyJob=async(id:any,applicant:any)=>{
    return axios.post('${base_url}apply/${id}',applicant)
    .then(result=>result.data)
    .catch(error=>{throw error;});

}
const getJobPostedByUser=async(id:any)=>{
      return axios.get('${base_url}postedBy/${id}')
      .then(result=>result.data)
      .catch(error=>{throw error;});
}

const changeAppStatus=async(application:any)=>{
    return axios.post('${base_url}changeStatus',application).then(result=>result.data)
    .catch(error=>{throw error;});
}
export {getJob,applyJob,getJobPostedByUser};