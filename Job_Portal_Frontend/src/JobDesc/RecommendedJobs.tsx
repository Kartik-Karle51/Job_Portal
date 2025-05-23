import React from 'react'
import { jobList } from '../Data/JobsData'
import JobCard from '../FindJobs/JobCard'

const RecommendedJobs = () => {
  return (
    <div>
        <div className='text-xl font-semibold mb-5'>Recommended Jobs</div>
        <div className='flex flex-col gap-5 flex-wrap'>
            {
              jobList.map((job,index)=>index< 6 && <JobCard key={index} {...job}/>)
            }
        </div>
    </div>
  )
}

export default RecommendedJobs