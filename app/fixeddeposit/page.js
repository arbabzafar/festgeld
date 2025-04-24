import React from 'react'
import Header from '../components/header'
import Cards from '../components/cards'
import Footer from '../components/footer'
import Festgid from '../components/festgid'
import InterestRate from '../components/interestrate'
import Table from '../components/table'
function FixedDeposit() {
  return (
    <div>
      <Header />
      <Cards />
      <Festgid />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">
          The most important things in brief
        </h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="font-bold mb-2">How it works:</h2>
            <p className="text-gray-700">
              Fixed-term deposits are a type of investment in which you invest a specific amount for a set period at a fixed interest rate. During this period, the invested capital is generally not accessible.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Interest rates:</h2>
            <p className="text-gray-700">
              Fixed-term deposit accounts often offer higher interest rates than current accounts or savings accounts. Currently, interest rates of up to 3.5% per year are possible.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Costs:</h2>
            <p className="text-gray-700">
              Opening and maintaining fixed-term deposit accounts is generally free of charge. However, fees may vary between providers, so it's advisable to check the terms and conditions of each bank.
            </p>
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#5AAFBE] text-white px-6 py-3 rounded-md hover:bg-[#4a9aaa] transition-colors">
              request an individual offer
            </button>
          </div>
        </div>
      </div>
        <InterestRate />
        
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What factors influence fixed deposit interest rates and how do investors find the best offers?
        </h2>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            The level of fixed deposit interest is largely determined by several factors, in particular:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-700">
                <span className="font-bold">The key interest rate of the European Central Bank (ECB):</span> Changes in the ECB's key interest rate directly impact interest rates on savings accounts. When the key interest rate rises, banks follow suit and often raise their fixed-term deposit rates.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700">
                <span className="font-bold">The ECB deposit rate:</span> Banks that deposit surplus funds with the ECB base their fixed-term deposit offers on the deposit rates set there.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700">
                <span className="font-bold">Term of the fixed-term deposit:</span> As a rule, the longer the term, the higher the interest rate, as banks prefer long-term deposits.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700">
                <span className="font-bold">Competition between banks:</span> Some banks, especially in other EU countries, offer more attractive fixed deposit interest rates to attract new customers.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700">
                <span className="font-bold">Inflation rate:</span> High inflation can lead to rising interest rates, while falling inflation rates tend to lower interest rates.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">How to find the best fixed deposit offers:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Regularly compare current fixed-term deposit conditions to secure the highest interest rates.</li>
            <li>Pay attention to the term - longer terms usually offer higher interest rates, while shorter terms allow more flexibility.</li>
            <li>Consider offers from banks in other EU countries, which often offer more attractive interest rates.</li>
            <li>Use comparison portals like Festgeld24 to quickly and easily find the best conditions.</li>
          </ul>
          
          <p className="text-gray-700 mt-4">
            With careful selection and targeted comparison, investors can secure the best fixed deposit interest rates for their individual needs.
          </p>
        </div>
      </div>
      <Table /> 
      
      <div className="py-16 bg-[#E8F4FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left form section */}
            <div className="lg:w-1/2 bg-white p-8 rounded shadow">
              <h3 className="text-xl font-bold mb-6">
                Get your personal offer now – quickly, securely and free of charge!
              </h3>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#489FB5]"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Last name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#489FB5]"
                  />
                  <input 
                    type="email" 
                    placeholder="e-mail" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#489FB5]"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#489FB5]"
                  />
                  <input 
                    type="text" 
                    placeholder="investment amount e.g. 10,000 euros" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#489FB5]"
                  />
                </div>
                
                <div className="flex items-start mt-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-[#489FB5] hover:underline">privacy policy</a> and <a href="#" className="text-[#489FB5] hover:underline">terms and conditions</a>
                  </label>
                </div>
                
                <button className="bg-[#5AAFBE] text-white py-2 px-6 rounded-full hover:bg-[#4a9aaa] transition-colors mt-2 text-sm">
                  Request a quote now
                </button>
              </form>
              
              <div className="mt-8">
                <h4 className="font-bold mb-2">Your advantages with daily and fixed-term deposits at Festgeld24</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">
                      <strong>Safe & predictable:</strong> Benefit from EU-wide deposit protection of up to €100,000 per bank and person.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">
                      <strong>Attractive interest rates:</strong> Secure top conditions – whether flexible in the short term or stable in the long term.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">
                      <strong>Flexibility:</strong> Call money with daily availability or fixed-term deposits with guaranteed interest rates of up to 8% pa
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">
                      <strong>Individual options:</strong> Choose between monthly, quarterly or annual interest payments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right advantages section */}
            <div className="lg:w-1/2 pt-4">
              <h3 className="text-2xl font-bold mb-4">
                Get your personal offer within 24 hours
              </h3>
              
              <p className="mb-4 font-medium">
                Call and fixed-term deposits - 9 convincing advantages
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Attractive interest rates</span> - up to 5.20% pa
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Flexible terms</span> - from 1 month to 10 years
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Starting from 1,000 euros</span> - ideal for small and large investments
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Available at any time (daily money)</span> - full flexibility without notice periods
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Regular interest credit</span> - monthly, quarterly or annually
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">EU-wide deposit guarantee</span> - up to €100,000 per person and bank
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Safe & predictable</span> - guaranteed interest rates, independent of market fluctuations
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Easy administration</span> - convenient online banking for full control
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5AAFBE] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Experienced partner banks</span> - only tested, reputable institutions across Europe
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F4F6] py-16">
      <div className="max-w-4xl mx-auto px-4 py-12 ">
        <h2 className="text-2xl font-semibold mb-6">How safe is fixed deposit?</h2>
        
        <p className="text-gray-700 mb-4">
          Fixed-term deposits are considered one of the safest forms of investment because they are protected by the statutory deposit guarantee scheme within the EU. This means that up to €100,000 per person and bank is protected in the event of a bank's insolvency.
        </p>
        
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="font-bold mb-2">Statutory deposit protection:</h3>
            <p className="text-gray-700">
              This guarantees that your capital will be reimbursed up to the specified limit, even in the event of the bank's insolvency. If the deposit protection is in a foreign currency, the protection depends on the respective exchange rate.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Additional private deposit protection:</h3>
            <p className="text-gray-700">
              Many banks are members of voluntary deposit protection funds that can extend protection beyond the statutory €100,000. Depending on the bank and country, the coverage may therefore be even more comprehensive.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">High stability at EU banks:</h3>
            <p className="text-gray-700">
              Fixed-term deposits at banks within the European Union (EU) benefit from strict regulatory requirements and reliable financial supervision.
            </p>
          </div>
          
          <div>
            <p className="text-gray-700">
              To ensure maximum security, it is worthwhile to rely on banks with a good credit rating and, if necessary, additional voluntary deposit protection.
            </p>
          </div>
        </div>
      </div>
      </div>
      
      <div className=" py-16">
      <div className="max-w-4xl mx-auto px-4 py-12 ">
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
      <Footer />
    </div>
  )
}

export default FixedDeposit
