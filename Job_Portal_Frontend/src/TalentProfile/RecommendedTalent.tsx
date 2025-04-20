import React from 'react'
import { talents } from '../Data/Talentdata'
import TalentCard from '../FindTalent/TalentCard'

const RecommendedTalent = () => {
  return (
    <div>
        <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
        <div className='flex flex-col gap-5 flex-wrap'>
            {
                talents.map((talent,index)=>index <4 &&<TalentCard key={index} {...talent} />)
            }
        </div>
    </div>
  )
}

export default RecommendedTalent