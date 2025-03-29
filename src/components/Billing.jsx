import React from 'react'
import { apple,  google } from '../assets'
import bill from '../assets/bill.svg' // Keeping these imports; can replace if needed
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='web-development'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Elevate your business <br className='sm:block hidden'/> with digital solutions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Mrcitsoft Innovations, we specialize in crafting scalable web solutions 
          that empower your business. From seamless websites to robust cybersecurity, 
          our innovative tools redefine your digital presence with excellence.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        </div>
      </div>  
    </section>
  )
}

export default Billing