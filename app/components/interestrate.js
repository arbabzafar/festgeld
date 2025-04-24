import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'

function InterestRate() {
  return (
    <div>
         <div className=" py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center mb-12">
          Current overnight interest rates and market developments
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 space-y-6">
            <div className="mb-0">
              <h3 className="font-bold mb-2">Interest rates:</h3>
              <p className="text-gray-700">
                Current savings accounts offer attractive interest rates. For example, Suresse Direkt Bank offers an interest rate of 3.20% per annum for new customers with a four-month interest rate guarantee.
              </p>
            </div>

            <div className="mb-0">
              <h3 className="font-bold mb-2">Key interest rate development:</h3>
              <p className="text-gray-700">
                On January 30, 2025, the European Central Bank (ECB) lowered its key interest rate by 0.25 percentage points. The interest rate on the deposit facility is now 2.75%.
              </p>
            </div>

            <div className="mb-0">
              <h3 className="font-bold mb-2">Inflation:</h3>
              <p className="text-gray-700">
                The inflation rate in Germany is currently 2.2%, approaching the ECB's target of 2.0%.
              </p>
            </div>

            <div className="mb-0">
              <h3 className="font-bold mb-2">Outlook:</h3>
              <p className="text-gray-700">
                Due to recent interest rate cuts, overnight interest rates may decline slightly in the near future. Nevertheless, they remain attractive by historical standards. It's advisable to regularly check current conditions and, if necessary, consider offers from banks in other European countries, as these often offer higher interest rates.
              </p>
            </div>

            <p className="text-gray-700 mt-4">
              Festgeld24 is happy to provide you with current information and individual offers.
            </p>
          </div>

          <div className="lg:w-96">
            <Image 
              src={logo} 
              alt="Festgeld24 Logo" 
              className="w-full"
            />
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default InterestRate
