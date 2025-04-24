"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null) // Reset active dropdown when closing menu
  }

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Festgeld24 Logo"
                width={150}
                height={40}
                priority
                className='cursor-pointer'
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="hidden max-[767px]:block rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            {!isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden min-[768px]:flex items-center space-x-8">
            <div className="relative group hover:cursor-pointer">
              <button className="text-black hover:text-gray-900 py-4 font-semibold  cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#5BB5D1] after:left-0 after:bottom-3 after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                Save
              </button>
              <div className="absolute left-[-383px] top-[calc(100%-8px)] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out z-50">
                <div className="pt-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 w-[500px]">
                    <Link href="/savemoney" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150 cursor-pointer">
                      <div className="bg-[#5BB5D1] rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Daily money</div>
                        <div className="text-sm text-gray-600">Deposit with fixed term and fixed interest rate</div>
                      </div>
                    </Link>
                    
                    <Link href="/fixeddeposit" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg mt-2 transition duration-150 cursor-pointer">
                      <div className="bg-[#5BB5D1] rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Fixed deposit</div>
                        <div className="text-sm text-gray-600">Deposit with fixed term and fixed interest rate</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group hover:cursor-pointer">
              <button className="text-black hover:text-gray-900 py-4 font-semibold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#5BB5D1] after:left-0 after:bottom-3 after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer">
                Financial knowledge
              </button>
              <div className="absolute left-[-283px] top-[calc(100%-8px)] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out z-50">
                <div className="pt-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 w-[500px]">
                    <Link href="/save" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150 cursor-pointer">
                      <div className="bg-[#5BB5D1] rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Save</div>
                        <div className="text-sm text-gray-600">Receive higher interest rates than your bank, including national deposit guarantee</div>
                      </div>
                    </Link>

                    <Link href="/investment" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg mt-2 transition duration-150 cursor-pointer">
                      <div className="bg-[#5BB5D1] rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Investment</div>
                        <div className="text-sm text-gray-600">Accept fluctuations in value in order to achieve higher returns in the long term</div>
                      </div>
                    </Link>

                    <Link href="/tax" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg mt-2 transition duration-150 cursor-pointer">
                      <div className="bg-[#5BB5D1] rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Tax information</div>
                        <div className="text-sm text-gray-600">Information on the tax treatment of investments</div>
                      </div>
                    </Link>

                    <Link href="/protection" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg mt-2 transition duration-150 cursor-pointer">
                      <div className="bg-[#5BB5D1] rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-medium">Deposit protection</div>
                        <div className="text-xs sm:text-sm text-gray-600">All about the harmonized deposit guarantee system in Europe</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group hover:cursor-pointer">
              <button className="text-black cursor-pointer hover:text-gray-900 py-4 text-base sm:text-lg font-semibold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#5BB5D1] after:left-0 after:bottom-3 after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                Help and contact
              </button>
              <div className="absolute right-0 top-[calc(100%-8px)] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out">
                <div className="pt-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-72">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">Fast help 24/7</h3>
                    
                    <div className="space-y-4">
                      <a href="mailto:info@festgeld24.de" className="flex items-center space-x-3 p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-150">
                        <div className="bg-[#5BB5D1] rounded-full p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-600">info@festgeld24.de</span>
                      </a>
                      
                      <a href="tel:0211 8797511" className="flex items-center space-x-3 p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-150">
                        <div className="bg-[#5BB5D1] rounded-full p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-gray-600">0211 8797511</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-0 bg-black/30 z-40" onClick={toggleMenu} />
      )}

      {/* Mobile Navigation Menu */}
      <div 
        className={`absolute top-0 left-0 w-screen h-screen bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={logo}
              alt="Festgeld24 Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-4">
            {/* Sparen */}
            <div className="">
              <button 
                onClick={() => toggleDropdown('sparen')}
                className="flex items-center justify-between w-full text-left text-black font-semibold py-4 px-2 text-base sm:text-lg"
              >
                <span>Sparen</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'sparen' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'sparen' ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 py-2 space-y-3">
                  <Link href="/savemoney" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-medium">Daily money</div>
                      <div className="text-xs sm:text-sm text-gray-600">Deposit with fixed term and fixed interest rate</div>
                    </div>
                  </Link>
                  <Link href="/fixeddeposit" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Fixed deposit</div>
                      <div className="text-sm text-gray-600">Deposit with fixed term and fixed interest rate</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Finanzwissen */}
            <div className="">
              <button 
                onClick={() => toggleDropdown('finanzwissen')}
                className="flex items-center justify-between w-full text-left text-black font-semibold py-4 px-2 text-base sm:text-lg"
              >
                <span>Finanzwissen</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'finanzwissen' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'finanzwissen' ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 py-2 space-y-3">
                  <Link href="/save" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Save</div>
                      <div className="text-sm text-gray-600">Receive higher interest rates than your bank</div>
                    </div>
                  </Link>
                  <Link href="/investment" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Investment</div>
                      <div className="text-sm text-gray-600">Accept fluctuations in value for higher returns</div>
                    </div>
                  </Link>
                  <Link href="/tax" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Tax information</div>
                      <div className="text-sm text-gray-600">Information on investment tax treatment</div>
                    </div>
                  </Link>
                  <Link href="/protection" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Deposit protection</div>
                      <div className="text-sm text-gray-600">All about deposit guarantee in Europe</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hilfe und Kontakt */}
            <div className="">
              <button 
                onClick={() => toggleDropdown('hilfe')}
                className="flex items-center justify-between w-full text-left text-black font-semibold py-4 px-2 text-base sm:text-lg"
              >
                <span>Hilfe und Kontakt</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'hilfe' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'hilfe' ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 py-2 space-y-3">
                  <a href="mailto:info@festgeld24.de" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">info@festgeld24.de</div>
                      <div className="text-sm text-gray-600">Send us an email</div>
                    </div>
                  </a>
                  <a href="tel:0211 8797511" className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-[#5BB5D1] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">0211 8797511</div>
                      <div className="text-sm text-gray-600">Call us directly</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header