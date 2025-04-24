import React from 'react'
import Image from 'next/image'
import logo from '../images/Whitelogo.png'
function Festgid2() {
  return (
    <div>
        <div className="bg-[#489FB5]">
      <div className="flex items-center justify-between py-12 px-16 max-w-5xl mx-auto">
        <div className="w-1/3 flex justify-center">
          <Image src={logo} alt="Festgeld24 Logo" className="w-44" />
        </div>
        <div className="w-2/3 text-white space-y-1">
          <h2 className="text-2xl font-medium mb-2">Do you want to optimally align your investments?</h2>
          <p className="text-sm">Take advantage of the opportunity to make your investments <span className="font-bold">more efficient and profitable</span>! Our experts are at your side with <span className="font-bold">customized solutions and professional advice</span> to help you achieve your financial goals faster.</p>
          <p className="text-sm"><span className="font-bold">Individual investment strategies</span> for maximum returns.</p>
          <p className="text-sm"><span className="font-bold">Optimized fixed-term deposit and call money solutions</span> for more flexibility.</p>
          <p className="text-sm"><span className="font-bold">Personal advice</span>, tailored to your needs.</p>
          <p className="text-sm">Contact us today and discover how you can get the most out of your investments!</p>
          
          <div className="mt-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-75 mb-2 py-2 px-3 rounded-full text-sm text-gray-700 bg-white" 
            />
            <button className="w-75 bg-[#FFBB55] hover:bg-[#FFA726] text-white py-2 px-3 rounded-full text-sm font-medium">
              Request a consultation now
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Festgid2
