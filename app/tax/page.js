'use client'
import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

function Tax() {
  const [activeTab, setActiveTab] = useState('belgium');

  return (
    <div>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-light text-center mb-8">Tax information</h1>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <p>
            At Festgeld24, we provide our customers with the relevant tax information on overnight and fixed-term deposits with our partner banks free of charge. This includes a transparent presentation of the tax aspects associated with the investment products offered. It is important to note that the tax treatment of investments can vary depending on the product and individual situation.
          </p>
          
          <p>
            Fixed-term deposits are taxed in accordance with applicable tax regulations and laws. Customers can find all relevant information regarding the taxation of their fixed-term deposits in the "Tax Information" section of the Festgeld24 platform. The tax implications are presented transparently so that investors can fulfill their tax obligations.
          </p>
          
          <p>
            However, it is important to emphasize that we are not permitted to provide tax advice and cannot accept liability for the accuracy of tax information. According to the legal provisions of the Tax Advisory Act (StBerG), we are prohibited from offering tax advice or limited assistance in tax matters. This is the responsibility of specialized and licensed tax advisors and tax offices.
          </p>
          
          <p>
            As a service provider in the investment sector, we strive to provide our clients with the best possible information and support. Therefore, we recommend contacting a qualified tax advisor or the relevant tax office with any tax-related questions or individual concerns. These experts can provide comprehensive advice and clarification of tax matters
          </p>
        </div>
      </main>
      
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-light text-center mb-10">Tax aspects of overnight and fixed-term deposits</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="mb-6">
            In Germany, the taxation of call and fixed-term deposits primarily affects the interest income. This is
            subject to a flat-rate withholding tax of 25% plus the solidarity surcharge and, if applicable, church
            tax. Banks automatically deduct this tax unless there are exemption orders or non-assessment
            certificates.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Tabs on the left */}
            <div className="w-full md:w-1/3">
              <button 
                className={`w-full text-left py-3 px-4 flex items-center justify-between  ${activeTab === 'belgium' ? 'bg-white text-[#489FBC]' : 'bg-gray-100 text-gray-700'} border-gray-300`}
                onClick={() => setActiveTab('belgium')}
              >
                <span>Belgium</span>
                <span className="text-gray-400">›</span>
              </button>
              
              <button 
                className={`w-full text-left py-3 px-4 flex items-center justify-between  ${activeTab === 'germany' ? 'bg-white text-[#489FBC]' : 'bg-gray-100 text-gray-700'} border-gray-300`}
                onClick={() => setActiveTab('germany')}
              >
                <span>Germany</span>
                <span className="text-gray-400">›</span>
              </button>
              
              <button 
                className={`w-full text-left py-3 px-4 flex items-center justify-between  ${activeTab === 'denmark' ? 'bg-white text-blue-500' : 'bg-gray-100 text-gray-700'} border-gray-300`}
                onClick={() => setActiveTab('denmark')}
              >
                <span>Denmark</span>
                <span className="text-gray-400">›</span>
              </button>
            </div>
            
            {/* Content on the right */}
            <div className="w-full md:w-2/3   p-6 bg-white">
              {activeTab === 'belgium' && (
                <div>
                  <p className="mb-4">
                    Medium-term investments are a good option if investors already know they'll need the money
                    at a specific time, for example, for larger purchases. In this case, various investment options
                    are available:
                  </p>
                  <p className="mb-4">
                    <strong>Fixed-term deposits:</strong> With fixed-term deposits with terms of three or five years, you can invest
                    your money until you need it. This type of investment offers security through deposit
                    protection of up to €100,000 per customer and bank.
                  </p>
                  <p>
                    <strong>Savings plans:</strong> Savings plans are another option for medium-term investments. They allow you
                    to invest regularly and build long-term wealth.
                  </p>
                </div>
              )}
              
              {activeTab === 'germany' && (
                <div>
                  <p className="mb-4">
                    In Germany, fixed-term deposits are subject to a withholding tax (Abgeltungssteuer) of 25% plus solidarity surcharge.
                  </p>
                  <p className="mb-4">
                    <strong>Withholding tax:</strong> The standard tax rate is 25% on interest earned. Additionally, a 5.5% solidarity surcharge 
                    is applied to the tax amount (effectively making it 26.375%).
                  </p>
                  <p>
                    <strong>Church tax:</strong> If applicable, church tax may be charged at a rate of 8% or 9% depending on the federal state.
                  </p>
                </div>
              )}
              
              {activeTab === 'denmark' && (
                <div>
                  <p className="mb-4">
                    In Denmark, interest income from deposits is taxed as capital income.
                  </p>
                  <p className="mb-4">
                    <strong>Tax rate:</strong> The tax rate for capital income can range from approximately 33% to 42% depending on the individual's tax situation.
                  </p>
                  <p>
                    <strong>Annual reporting:</strong> Interest income must be reported on the annual tax return, although most financial institutions report this information automatically to the tax authorities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

    </div>
  )
}

export default Tax
