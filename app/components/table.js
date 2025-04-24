import React from 'react'

function Table() {
  return (
    <div>
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Attractive fixed-interest offers for your asset growth</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-left text-sm sm:text-base">Investment form</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center text-sm sm:text-base">Solid investment</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center text-sm sm:text-base">Growth opportunity</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center text-sm sm:text-base">Premium investment</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center text-sm sm:text-base">Exclusive option</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center text-sm sm:text-base">Top returns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium text-sm sm:text-base">Interest / return pa</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">from 3.50%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">4.80% to 5.50%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">6.00%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">4.50% - 7.00%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">up to 8% pa</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium text-sm sm:text-base">Minimum investment</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">5,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">10,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">15,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">20,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">from 1,000.00 €</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium text-sm sm:text-base">Duration</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">from 6 months</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">1 to 3 years</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">3 to 5 years</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">from 2 years</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">flexible up to 10 years</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium text-sm sm:text-base">Interest payment</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">monthly</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">quarterly</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">yearly</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">as desired</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center text-sm sm:text-base">daily (daily money)</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium text-sm sm:text-base">Advantages</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-xs sm:text-sm">Cooperation with leading EU banks High stability through top ratings EU-wide deposit guarantee</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-xs sm:text-sm">Long term partnerships with prime banks Attractive conditions through exclusive banking agreements</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-xs sm:text-sm">Premium offers from renowned financial institutions Experience from international financial markets</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-xs sm:text-sm">Direct processing via prime banks Highest security standards according to EU regulations</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-xs sm:text-sm">Exclusive conditions with top international banks Access to high-yield markets</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Security</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★★</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Availability</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★★</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Return opportunities</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★☆☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★★</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★☆</div>
                  </td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">
                    <div className="flex justify-center text-[#FFB800]">★★★★★</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-[#FF9F1C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-opacity-90 transition-colors text-base sm:text-lg font-medium">
              Request your free quote now!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
