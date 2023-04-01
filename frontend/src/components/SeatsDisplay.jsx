import React from 'react'
import {MdChair} from 'react-icons/md'

function SeatsDisplay({coachDetails}) {
  return (
    <div className='row container my-2'>
          <div className='col-12 col-sm-8 col-md-6 mx-auto'>
        <div className='d-flex justify-content-around'>
            <div className=''><MdChair className={coachDetails.seats[77] ? 'text-info-emphasis opacity-50' : 'text-info-emphasis'}/></div>
            <div className=''><MdChair className={coachDetails.seats[78] ? 'text-info-emphasis opacity-50' : 'text-info-emphasis'}/></div>
            <div className=''><MdChair className={coachDetails.seats[79] ? 'text-info-emphasis opacity-50' : 'text-info-emphasis'}/></div>
        </div>
        {new Array(11).fill(0).map((item,index1) => {
        return <div key={index1} className='row justify-content-around'>
          {new Array(7).fill(0).map((item,index2) => {
            return <div key={index2} className='col-1'><MdChair className={coachDetails.seats[(10 - index1)*7 + index2] ? 'text-info-emphasis opacity-50' : 'text-info-emphasis'}/></div>
          })}
        </div>
      })}
        {/* <div className='row justify-content-around'>
            <div className='col-1'><MdChair/></div>
            <div className='col-1'><MdChair/></div>
            <div className='col-1'><MdChair/></div>
            <div className='col-1'><MdChair/></div>
            <div className='col-1'><MdChair/></div>
            <div className='col-1'><MdChair/></div>
            <div className='col-1'><MdChair/></div>
        </div>
         */}
          </div>
        </div>
  )
}

export default SeatsDisplay
