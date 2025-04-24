import React from 'react'

function cards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-colors duration-200 hover:bg-[#F3F4F6] cursor-pointer">
            <div className="text-[#489FB5] font-medium mb-4">Optimized for demanding investors</div>
            <h2 className="text-2xl font-bold mb-4">Fixed Deposit Plus</h2>
            <div className="flex flex-col justify-between h-[calc(100%-160px)]">
              <p className="text-gray-600">Individual investment offer – fast and tailored within 24 hours</p>
              <div className="flex justify-end mt-8">
                <button className="bg-[#489FB5] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors w-50">
                  Request a quote now
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-colors duration-200 hover:bg-[#F3F4F6] cursor-pointer">
            <div className="text-[#489FB5] font-medium mb-4">Perfect for strategic investors</div>
            <h2 className="text-2xl font-bold mb-4">Daily Money Plus</h2>
            <div className="flex flex-col justify-between h-[calc(100%-160px)]">
              <p className="text-gray-600">Get your perfectly tailored offer in 24 hours</p>
              <div className="flex justify-end mt-8">
                <button className="bg-[#489FB5] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors w-50">
                  Request a quote now
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-colors duration-200 hover:bg-[#F3F4F6] cursor-pointer">
            <div className="text-[#489FB5] font-medium mb-4">For experienced investors</div>
            <h2 className="text-2xl font-bold mb-4">Fixed deposit pool</h2>
            <div className="flex flex-col justify-between h-[calc(100%-160px)]">
              <p className="text-gray-600">Bundle fixed-term deposits cleverly, make optimal use of interest</p>
              <div className="flex justify-end mt-8">
                <button className="bg-[#489FB5] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors w-50">
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
