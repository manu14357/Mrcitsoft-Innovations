import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img
        src={quotes}
        alt='double-quotes'
        className='w-[42px] h-[27px] object-contain'
      />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
        {content}
      </p>
      <div className='flex flex-row'>

        <div className='flex flex-col ml-4'>
       
        </div>
      </div>
    </div>
  )
}

export default Feedback
