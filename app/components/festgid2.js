import React from 'react'
import Image from 'next/image'
import logo from '../images/Whitelogo.png'

function Festgid2() {
  return (
    <div>
      <div className="bg-[#489FB5]">
        <div className="py-8 px-4 md:px-6 lg:px-16 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
              <Image src={logo} alt="Festgeld24 Logo" className="w-44 md:w-48" />
            </div>
            <div className="w-full max-w-2xl lg:w-2/3 text-white space-y-3 lg:space-y-1 px-4 md:px-6 lg:px-0">
              <h2 className="text-xl md:text-2xl font-medium mb-4 text-center lg:text-left">
                Do you want to optimally align your investments?
              </h2>
              <div className="space-y-3 md:space-y-2">
                <p className="text-sm md:text-base text-center lg:text-left">
                  Take advantage of the opportunity to make your investments <span className="font-bold">more efficient and profitable</span>! Our experts are at your side with <span className="font-bold">customized solutions and professional advice</span> to help you achieve your financial goals faster.
                </p>
                <p className="text-sm md:text-base text-center lg:text-left">
                  <span className="font-bold">Individual investment strategies</span> for maximum returns.
                </p>
                <p className="text-sm md:text-base text-center lg:text-left">
                  <span className="font-bold">Optimized fixed-term deposit and call money solutions</span> for more flexibility.
                </p>
                <p className="text-sm md:text-base text-center lg:text-left">
                  <span className="font-bold">Personal advice</span>, tailored to your needs.
                </p>
                <p className="text-sm md:text-base text-center lg:text-left">
                  Contact us today and discover how you can get the most out of your investments!
                </p>
              </div>
              
              <div className="mt-6 flex flex-col items-center lg:items-start space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full max-w-lg py-2.5 px-4 rounded-full text-sm md:text-base text-gray-700 bg-white" 
                />
                <button className="w-full max-w-lg bg-[#FFBB55] hover:bg-[#FFA726] text-white py-2.5 px-4 rounded-full text-sm md:text-base font-medium transition duration-300">
                  Request a consultation now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Festgid2
