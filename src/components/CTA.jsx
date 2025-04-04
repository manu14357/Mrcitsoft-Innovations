import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} mb-4`}>
          Ready to empower your digital world?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mb-6 sm:mb-0`}>
          Partner with Mrcitsoft Innovations to unlock cutting-edge web solutions 
          and elevate your business with our expert technology services.
        </p>
      </div>
      <div
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-6`}
      >
        <Button />
      </div>
    </section>
  );
};

export default CTA;