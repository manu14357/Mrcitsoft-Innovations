import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import logo from '../assets/logo.png';
import { socialMedia } from '../constants'; // Assuming socialMedia is defined in constants

// Footer links configuration
const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', link: '/web-services' },
      { name: 'UI/UX Design', link: '/ui-services' },
      { name: 'Mobile Apps', link: '/mobile-services' },
      { name: 'Cyber Security', link: '/cyber-security-services' },
      { name: 'Business Development', link: '/business-development-services' },
      { name: 'Quality Assurance', link: '/quality-assurance-services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', link: '/About-Us' },
      { name: 'Contact Us', link: '/Contact-Us' },
      { name: 'Careers', link: '/Career' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', link: '/Blogs' },
      { name: 'Support', link: '/support' },
      { name: 'Privacy Policy', link: '/privacy-Policy' },
    ],
  },
];

const Footer = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
      className={`${styles.flexCenter} ${styles.paddingY} flex-col backdrop-blur-md text-white`}
    >
      {/* Main Footer Content */}
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full max-w-6xl mx-auto px-4 sm:px-8`}>
        {/* Logo and Description */}
        <div className="flex-1 flex flex-col justify-start mr-0 md:mr-10 mb-8 md:mb-0">
          <motion.img
            src={logo}
            alt="Mrcitsoft Innovations Logo"
            className="w-[200px] h-[60px] object-contain mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <p className={`${styles.paragraph} mt-2 max-w-[310px] text-white`}>
            Empowering your digital world with innovative technology solutions.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white mb-4">
                {link.title}
              </h4>
              <ul className="list-none">
                {link.links.map((item, index) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-200 hover:text-blue-400 cursor-pointer ${
                      index !== link.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    <a href={item.link}>{item.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        variants={fadeInVariants}
        className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-400/50 max-w-6xl mx-auto px-4 sm:px-8"
      >
        <div className="flex flex-col md:flex-row items-center text-center md:text-left text-gray-200">
          <p className="font-poppins font-normal text-[16px] leading-[24px]">
            © {new Date().getFullYear()} Mrcitsoft Innovations. All Rights Reserved.
          </p>
          <div className="flex space-x-4 md:ml-6 mt-2 md:mt-0">
            <a
              href="/privacy-Policy"
              className="font-poppins font-normal text-[16px] leading-[24px] text-gray-200 hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-200 hidden md:inline">|</span>
            <a
              href="/Terms-of-service"
              className="font-poppins font-normal text-[16px] leading-[24px] text-gray-200 hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="flex flex-row md:mt-0 mt-6 space-x-6">
          {socialMedia.map((social, index) => (
            <motion.img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.open(social.link, '_blank')}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;