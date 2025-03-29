import React from 'react'
import  card  from '../assets/card.svg' // Keeping the image import; can replace if needed
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Unlock digital success <br className='sm:block hidden'/> in a few simple steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Mrcitsoft Innovations, we streamline your journey to a powerful online presence 
          with expertly crafted web solutions. Our tailored approach ensures your business 
          thrives in the digital landscape with ease and confidence.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='web-solutions'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal