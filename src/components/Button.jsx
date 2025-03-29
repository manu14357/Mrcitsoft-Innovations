import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Button = ({ styles }) => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Function to navigate to Contact-Us page
  const handleClick = () => {
    navigate('/Contact-Us');
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      onClick={handleClick}
      aria-label="Navigate to Contact Us page"
    >
      Get Started
    </button>
  );
};

export default Button;