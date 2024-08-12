import React, { useState } from 'react';

const Navbar = () => {
  const [selectedRole, setSelectedRole] = useState('Mentor');

  return (
    <nav className="p-3 flex justify-between items-center ">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="w-[92px]" />
      </div>
      <ul className="flex space-x-8">
        <li><a href="#explore" className="text-white">Explore</a></li>
        <li><a href="#blogs" className="text-white">Blogs</a></li>
        <li><a href="#subscription" className="text-white">Subscription</a></li>
        <li><a href="#contact-us" className="text-white">Contact Us</a></li>
      </ul>
      <div className="flex">
        <button
          className={`px-4 py-2 rounded-md rounded-l-sm ${selectedRole === 'Mentor' ? 'bg-[#1D5C6E] text-white' : 'bg-white text-black'}`}
          onClick={() => setSelectedRole('Mentor')}
        >
          Mentor
        </button>
        <button
          className={`px-4 py-2 rounded-md rounded-l-sm ${selectedRole === 'Mentee' ? 'bg-[#1D5C6E] text-white' : 'bg-white text-black'}`}
          onClick={() => setSelectedRole('Mentee')}
        >
          Mentee
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
