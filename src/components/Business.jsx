import React from 'react'
import { features } from '../constants' // Assuming this imports the updated features from your previous input
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt={title}
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='services' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You focus on your vision, <br className='sm:block hidden'/> we’ll empower your digital world.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Mrcitsoft Innovations, we deliver cutting-edge web development and technology solutions 
          to fuel your business growth. From scalable websites to robust cybersecurity, 
          we provide the tools you need to succeed in the digital age.
        </p>
        <Button styles='mt-10' /> {/* Assuming this is a "Learn More" or "Get Started" button */}
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business