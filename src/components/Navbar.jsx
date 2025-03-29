import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Import assets (replace with your actual asset paths)
import logo from '../assets/logo.png';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';

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
      }
    ]
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
  }
];

const Navbar = () => {
  // State management for mobile menu and dropdown
  const [toggle, setToggle] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Memoized animation variants to prevent unnecessary re-renders
  const navbarVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }), []);

  const dropdownVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  }), []);

  const dropdownItemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const mobileMenuVariants = useMemo(() => ({
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3 } },
  }), []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setToggle(false);
    setActiveDropdown(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Service description helper
  const getServiceDescription = (serviceId) => {
    const descriptions = {
      "web-services": "Craft stunning websites.",
      "ui-services": "Design intuitive interfaces.",
      "mobile-services": "Build powerful mobile apps.",
      "cyber-security-services": "Secure your digital assets.",
      "business-development-services": "Unlock growth opportunities.",
      "quality-assurance-services": "Ensure flawless performance."
    };
    return descriptions[serviceId] || "";
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="w-full fixed top-0 left-0 z-50 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between max-w-[1440px]">
          {/* Logo on Left */}
          <Link to="/" aria-label="Home" onClick={scrollToTop}>
            <motion.img
            src={logo}
            alt="Company Logo"
            className="w-[180px] sm:w-[200px] md:w-[220px] h-auto max-h-[46px] sm:max-h-[45px] object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            />
          </Link>


          {/* Desktop Menu on Right */}
          <ul className="list-none sm:flex hidden items-center space-x-6 lg:space-x-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-medium text-[14px] lg:text-[16px] text-gray-800 dark:text-white cursor-pointer relative group"
                onMouseEnter={() => nav.subLinks && setActiveDropdown(nav.id)}
                onMouseLeave={() => nav.subLinks && setActiveDropdown(null)}
              >
                {nav.subLinks ? (
                  <>
                    <div className="flex items-center hover:text-blue-600 transition-colors duration-300">
                      {nav.title}
                      <ChevronDown className="ml-1 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                    <AnimatePresence>
                      {activeDropdown === nav.id && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 lg:w-72 border dark:border-gray-700"
                        >
                          {nav.subLinks.map((subLink) => (
                            <motion.div
                              key={subLink.id}
                              variants={dropdownItemVariants}
                              className="py-2 lg:py-3 px-3 lg:px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                              <Link
                                to={`/${subLink.id}`}
                                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-[12px] lg:text-[14px]"
                                onClick={scrollToTop}
                              >
                                <span className="font-semibold">{subLink.title}</span>
                                <p className="text-[10px] lg:text-[12px] text-gray-500 dark:text-gray-400 mt-1">
                                  {getServiceDescription(subLink.id)}
                                </p>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={`/${nav.id}`}
                    className="relative hover:text-blue-600 transition-colors duration-300"
                    onClick={scrollToTop}
                  >
                    {nav.title}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center">
            <motion.img
              src={toggle ? closeIcon : menuIcon}
              alt="menu"
              className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] object-contain cursor-pointer"
              whileTap={{ scale: 0.9 }}
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </div>

        {/* Mobile Menu with Overlay */}
        <AnimatePresence>
          {toggle && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setToggle(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="sm:hidden fixed top-0 left-0 right-0 mx-4 sm:mx-6 bg-white dark:bg-gray-900 z-50 p-4 sm:p-6 pt-16 sm:pt-20 flex flex-col rounded-b-xl shadow-lg"
              >
                {/* Header with Logo and Close Button */}
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <img 
                    src={logo} 
                    alt="Company Logo" 
                    className="w-[180px] sm:w-[200px] md:w-[220px] h-auto max-h-[46px] sm:max-h-[45px] object-contain"
                  />
                  <motion.img
                    src={closeIcon}
                    alt="close"
                    className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] object-contain cursor-pointer"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setToggle(false)}
                  />
                </div>

                {/* Menu Items */}
                <ul className="list-none flex flex-col items-center space-y-6 sm:space-y-10 flex-1 justify-center">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className="font-semibold text-[18px] sm:text-[22px] text-gray-800 dark:text-white cursor-pointer w-full text-center"
                    >
                      {nav.subLinks ? (
                        <>
                          <div
                            className="flex justify-between items-center w-full py-2 sm:py-3 px-3 sm:px-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            onClick={() =>
                              setActiveDropdown(activeDropdown === nav.id ? null : nav.id)
                            }
                          >
                            {nav.title}
                            <ChevronDown
                              className={`ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 ${
                                activeDropdown === nav.id ? 'rotate-180' : ''
                              } transition-transform duration-300`}
                            />
                          </div>
                          <AnimatePresence>
                            {activeDropdown === nav.id && (
                              <motion.ul
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-4 w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg"
                              >
                                {nav.subLinks.map((subLink) => (
                                  <motion.li
                                    key={subLink.id}
                                    variants={dropdownItemVariants}
                                    className="py-3 sm:py-4 border-b dark:border-gray-700 last:border-b-0"
                                  >
                                    <Link
                                      to={`/${subLink.id}`}
                                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-[16px] sm:text-[18px] font-medium transition-colors duration-200"
                                      onClick={handleLinkClick}
                                      
                                    >
                                      {subLink.title}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={`/${nav.id}`}
                          className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                          onClick={handleLinkClick}
                        >
                          {nav.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-[50px] sm:h-[60px] lg:h-[70px]"></div>
    </>
  );
};

export default Navbar;