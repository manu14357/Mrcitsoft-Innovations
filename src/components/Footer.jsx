import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from '../style';
import logo from '../assets/logo.png';
import { socialMedia } from '../constants'; // Assuming socialMedia is defined in constants

// Navigation links configuration
const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
    subLinks: [
      {
        id: "web-services",
        title: "Web Development",
      },
      {
        id: "ui-services",
        title: "UI/UX Design",
      },
      {
        id: "mobile-services",
        title: "Mobile App Development",
      },
      {
        id: "cyber-security-services",
        title: "Cyber Security",
      },
      {
        id: "business-development-services",
        title: "Business Development",
      },
      {
        id: "quality-assurance-services",
        title: "Quality Assurance",
      },
    ],
  },
  {
    id: "About-Us",
    title: "About",
  },
  {
    id: "Blogs",
    title: "Blogs",
  },
  {
    id: "Career",
    title: "Career",
  },
  {
    id: "Contact-Us",
    title: "Contact",
  },
];

// Organize navLinks into three footer categories
const footerLinks = [
  {
    title: "Services",
    links: navLinks.find(link => link.id === "services").subLinks.map(subLink => ({
      name: subLink.title,
      link: `/${subLink.id}`,
    })),
  },
  {
    title: "Company",
    links: [
      { name: "Home", link: "/" },
      { name: "About", link: "/About-Us" },
      { name: "Career", link: "/Career" },
      { name: "Contact", link: "/Contact-Us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blogs", link: "/Blogs" },
      { name: "Support", link: "/support" },
      { name: "Privacy Policy", link: "/privacy-Policy" },
    ],
  },
];

const Footer = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <Link to={item.link} onClick={scrollToTop}>{item.name}</Link>
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
            <Link
              to="/privacy-Policy"
              className="font-poppins font-normal text-[16px] leading-[24px] text-gray-200 hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-200 hidden md:inline">|</span>
            <Link
              to="/Terms-of-service"
              className="font-poppins font-normal text-[16px] leading-[24px] text-gray-200 hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
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