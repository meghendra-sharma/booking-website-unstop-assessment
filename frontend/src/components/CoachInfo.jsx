import React from 'react'
import {MdChair} from 'react-icons/md'
import SeatsDisplay from './SeatsDisplay'
import Stats from './Stats'

function CoachInfo({coachDetails}) {





  return (
    <div className='bg-white shadow p-2 rounded'>
      <Stats coachDetails={coachDetails}/>
      <hr className='my-0' />
      <SeatsDisplay coachDetails={coachDetails}/>
    </div>
  )
}

export default CoachInfo
