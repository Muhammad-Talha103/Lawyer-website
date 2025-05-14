'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/images/logo.png';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const items = [
    'Immigration',
    'Property',
    'Matrimonial',
    'Personal',
    'Business',
    'Will',
  ];

  return (
    <header className="border bg-white mt-5 top-0 sticky px-4 max-w-[1250px] mx-auto z-50">
      <div className="flex items-center justify-between py-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={47}
            height={37}
            className="object-contain"
          />
          <div>
            <h1 className="font-medium text-[20px] md:text-[24px] text-[#DC1F27]">Lawyers</h1>
            <p className="text-[10px] md:text-[12px] font-semibold text-[#435065]">
              Legal Services
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          <span className="text-[#425066] font-medium text-[14px]">
            Practice Areas
          </span>
          {items.map((item) => (
            <span
              key={item}
              className="text-[#425066] font-medium text-[14px] flex items-center gap-1"
            >
              {item}
              <RiArrowDropDownLine size={20} />
            </span>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden sm:block items-end">
          <button className="bg-[#DC1F27] text-white font-medium text-[14px] py-1 px-4 rounded-md">
            Log In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <RiCloseLine size={24} />
            ) : (
              <RiMenu3Line size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden flex flex-col gap-2 py-2">
          <span className="text-[#425066] font-semibold">Practice Areas</span>
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between px-2 py-1 border-b"
            >
              <span className="text-[#425066] text-sm">{item}</span>
              <RiArrowDropDownLine size={20} />
            </div>
          ))}
          <button className="mt-2 bg-[#DC1F27] sm:hidden block text-white font-medium text-sm py-2 rounded-md">
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
