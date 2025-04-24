import React from 'react'

function cards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-200 hover:bg-[#F3F4F6] cursor-pointer">
            <div className="text-[#489FB5] font-medium mb-3 md:mb-4">Optimized for demanding investors</div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Fixed Deposit Plus</h2>
            <div className="flex flex-col justify-between h-[calc(100%-140px)]">
              <p className="text-gray-600">Individual investment offer – fast and tailored within 24 hours</p>
              <div className="flex justify-end mt-6 md:mt-8">
                <button className="bg-[#489FB5] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-opacity-90 transition-colors w-full md:w-auto">
                  Request a quote now
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-200 hover:bg-[#F3F4F6] cursor-pointer">
            <div className="text-[#489FB5] font-medium mb-3 md:mb-4">Perfect for strategic investors</div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Daily Money Plus</h2>
            <div className="flex flex-col justify-between h-[calc(100%-140px)]">
              <p className="text-gray-600">Get your perfectly tailored offer in 24 hours</p>
              <div className="flex justify-end mt-6 md:mt-8">
                <button className="bg-[#489FB5] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-opacity-90 transition-colors w-full md:w-auto">
                  Request a quote now
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-2 lg:col-span-1 mx-auto md:max-w-md lg:max-w-none bg-white rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-200 hover:bg-[#F3F4F6] cursor-pointer">
            <div className="text-[#489FB5] font-medium mb-3 md:mb-4">For experienced investors</div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Fixed deposit pool</h2>
            <div className="flex flex-col justify-between h-[calc(100%-140px)]">
              <p className="text-gray-600">Bundle fixed-term deposits cleverly, make optimal use of interest</p>
              <div className="flex justify-end mt-6 md:mt-8">
                <button className="bg-[#489FB5] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-opacity-90 transition-colors w-full md:w-auto">
                  Request a quote now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default cards
