'use client'
import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Festgid from '../components/festgid'
import Festgid2 from '../components/festgid2'


function Investment() {
  const [activeTab, setActiveTab] = useState('medium-term');

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl  text-center mb-12">Das Wichtigste in Kürze</h1>
        
        <ul className="space-y-8 max-w-4xl mx-auto">
          <li className="flex items-start">
            <span className="text-xl mr-2">•</span>
            <div>
              <span className="font-bold">Vielfältige Anlageoptionen:</span> Geldanlagen dienen dem <span className="font-bold">Vermögensaufbau</span> und umfassen verschiedene Möglichkeiten wie <span className="font-bold">Wertpapiere, Sachwerte</span> (z. B. Immobilien, Edelmetalle) sowie <span className="font-bold">Bankeinlagen</span> wie <span className="font-bold">Tagesgeld oder Festgeld</span>.
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="text-xl mr-2">•</span>
            <div>
              <span className="font-bold">Flexibler Anlagezeitraum:</span> Je nach Zielsetzung können Anlagen <span className="font-bold">kurz-, mittel- oder langfristig</span> gestaltet werden. Die richtige Wahl hängt davon ab, wie schnell Anleger auf ihr Kapital zugreifen möchten und welche Renditeziee sie verfolgen.
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="text-xl mr-2">•</span>
            <div>
              <span className="font-bold">Die passende Geldanlage finden:</span> Eine erfolgreiche Anlagestrategie basiert auf der klaren <span className="font-bold">Definition finanzieller Ziele</span>, der <span className="font-bold">Einschätzung der Risikobereitschaft</span> und der <span className="font-bold">Ermittlung des Kapitalbedarfs</span>. Ein gezielter Vergleich der verschiedenen Anlageformen hilft, die beste Lösung für individuelle Bedürfnisse zu finden.
            </div>
          </li>
        </ul>
      </div>
      <Festgid2 />
      
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Optimize your investments for maximum return</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg mb-2">Would you like to make your investments <span className="font-bold">more efficient and profitable</span>? Our experts are at your side to develop <span className="font-bold">customized solutions</span> that are perfectly aligned with your financial goals.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="md:w-1/3">
            <div 
              className={`p-6 rounded-lg mb-6 cursor-pointer transition-all ${activeTab === 'medium-term' ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-gray-100 hover:shadow-md'}`}
              onClick={() => setActiveTab('medium-term')}
            >
              <div className="flex items-center">
                <h3 className="text-xl text-blue-600">Opportunities for medium-term investments</h3>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div 
              className={`p-6 rounded-lg cursor-pointer transition-all ${activeTab === 'long-term' ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-gray-100 hover:shadow-md'}`}
              onClick={() => setActiveTab('long-term')}
            >
              <div className="flex items-center">
                <h3 className="text-xl text-blue-600">Focus on long-term investments</h3>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 bg-white p-6 shadow-md rounded-lg">
            {activeTab === 'medium-term' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Medium-term investments are a good option if investors already know they'll need the money at a specific time, for example, for larger purchases. In this case, various investment options are available:</h3>
                
                <div className="ml-4 mt-6">
                  <p className="mb-4"><span className="font-semibold">Fixed-term deposits:</span> With fixed-term deposits with terms of three or five years, you can invest your money until you need it. This type of investment offers security through deposit protection of up to €100,000 per customer and bank.</p>
                  
                  <p className="mb-4"><span className="font-semibold">Savings plans:</span> Savings plans are another option for medium-term investments. They allow you to invest regularly and build long-term wealth.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'long-term' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Long-term investments are ideal for building wealth over time and planning for the future. These options are suitable for investors with a longer time horizon:</h3>
                
                <div className="ml-4 mt-6">
                  <p className="mb-4"><span className="font-semibold">Equity investments:</span> Stocks and equity funds offer higher potential returns over longer periods. Despite short-term fluctuations, historical data shows they tend to outperform other asset classes over extended periods.</p>
                  
                  <p className="mb-4"><span className="font-semibold">Real estate:</span> Property investments provide both potential appreciation and regular rental income. They serve as a hedge against inflation and can be an excellent way to build wealth over decades.</p>
                  
                  <p className="mb-4"><span className="font-semibold">Pension plans:</span> Specialized retirement accounts offer tax advantages while helping you save for your future financial security.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Cards />
      <Festgid />
      
      <Footer />
    </div>
  )
}

export default Investment
