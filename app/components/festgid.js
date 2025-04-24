import React from 'react'

function Festgid() {
  return (
    <div>
        <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Festgeld24?</h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 text-lg">
              With Festgeld24, you benefit from the security of a fixed interest rate that remains unchanged throughout the entire term. This allows you to plan your return precisely from the start. As a general rule, the longer the term, the higher the interest rate. A comprehensive comparison of fixed deposit interest rates is therefore essential to find the best offers with the most attractive terms – and Festgeld24 can help you with this.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-[#489FC6]">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M3 18H21M7 10.5V14.5M12 8.5V14.5M17 4.5V14.5M7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Predictable returns</h3>
              <p className="text-gray-600 mb-4">Fixed interest rate over the entire term – no surprises, complete planning security.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 text-center self-start mt-12">
              <div className="w-14 h-14 mx-auto mb-3 text-[#489FC6]">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10.5H17M7 14.5H17M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Attractive interest rates</h3>
              <p className="text-gray-600 text-sm">Benefit from rising interest rates with longer terms and secure top conditions.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-[#489FC6]">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Simple comparison</h3>
              <p className="text-gray-600 mb-4">Find the best fixed-term deposit offers across Europe quickly and transparently – all with just one registration.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Festgid
