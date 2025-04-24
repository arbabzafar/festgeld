import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Image from 'next/image'
import logo from '../images/Whitelogo.png'
import Festgid from '../components/festgid'
function Save() {
  return (
    <div>
      <Header />
      <Cards />
      <div className="bg-[#5EBCCA]">
      <div className="flex items-center justify-between py-12 px-16 max-w-4xl mx-auto">
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
      {/* New section that will appear above the blue section */}
      <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">What happens at the end of my fixed-term deposit?</h2>
        
        <p className="text-gray-700 mb-4">
          When your fixed-term deposit matures, you have several options depending on your financial goals:
        </p>
        
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="font-bold mb-2">Extension:</h3>
            <p className="text-gray-700">
              You can reinvest your fixed-term deposit either with the same bank or with another partner bank at the current interest rates. This can be done either automatically or manually, if you wish, to continue to benefit from attractive terms.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Payout of the investment amount including interest:</h3>
            <p className="text-gray-700">
              You can have your entire capital, including interest earned, transferred to your reference account. This leaves the money at your disposal – whether for new investments or other financial projects.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Adjusting your investment strategy:</h3>
            <p className="text-gray-700">
              If interest rates have fallen or your financial plans have changed, it may be wise to consider alternative investment options, such as a combination of call money for flexibility and fixed-term deposits for stable interest rates.
            </p>
          </div>
          
          <div>
            <p className="text-gray-700">
              The decision depends on your personal financial strategy and current interest rates. Comparing fixed-term deposit offers ahead of time can help you get the most out of your investment.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Festgid />
      
      {/* Inflation and Saving section */}
      <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Inflation and Saving: How to Minimize the Loss of Value of Your Money</h2>
        
        <div className="space-y-6">
          <p className="text-gray-700">
            Despite recent interest rate cuts, savers are currently seeing little interest on their current accounts. 
            This situation is further exacerbated by inflation, which reached 2.2% in 2024, above the European 
            Central Bank's (ECB) target of 2.0%.
          </p>
          
          <p className="text-gray-700">
            Rising prices mean that savings gradually lose purchasing power. To counteract this loss of value, call 
            or fixed-term deposit accounts offer the opportunity to invest money at attractive interest rates. 
            Current interest rates for call money are up to 3.35% per annum.
          </p>
          
          <p className="text-gray-700">
            and for fixed-term deposits, depending on the term, up to 3.50% pa.
          </p>
          
          <p className="text-gray-700">
            If the interest gains achieved are higher in percentage terms than the current inflation rate or at least 
            approximately offset it, savers can limit the loss of purchasing power of their savings.
          </p>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Save
