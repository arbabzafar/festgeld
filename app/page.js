"use client"

import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Cards from './components/cards'
import Image from 'next/image'
import logo from './images/logo.png'
import styles from './styles/Banner.module.css'
import stander from './images/santander.png'
import ing from './images/ing.png'
import bnp from './images/bnp.png'
import Festgid from './components/festgid'
import Table from './components/table'

const Page = () => {
  // Testimonial slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "Festgeld24 is a valuable partner for us. Through our close collaboration, we can offer our customers exclusive interest rates and customized offers. Festgeld24's expertise and reliability have impressed us for years.",
      author: "Deutsche Bank"
    },
    {
      id: 2,
      text: "Working with Festgeld24 has significantly improved our investment product offerings. Their dedicated team and innovative approach makes them a trusted partner in the financial sector.",
      author: "Commerzbank"
    },
    {
      id: 3,
      text: "The collaboration with Festgeld24 allows us to reach a wider audience of investors. Their platform's transparency and ease of use has been invaluable for our customers.",
      author: "Santander"
    },
    {
      id: 4,
      text: "Festgeld24's commitment to customer satisfaction aligns perfectly with our values. Their expertise in fixed deposits has created a strong foundation for our partnership.",
      author: "ING"
    },
    {
      id: 5,
      text: "Our partnership with Festgeld24 has allowed us to expand our market reach. Their knowledge of the fixed deposit market has proven to be an asset to our business strategy.",
      author: "BNP Paribas"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <Header />
      {/* banner */}
      <div className={`${styles.banner} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">
                THE MOST IMPORTANT INFORMATION AT A GLANCE
              </h1>
              <p className="text-xl mb-8">
                Find the best current daily and fixed-term deposit offers in our comparison! Benefit from attractive terms and conditions from over 30 partner banks across Europe – with just one registration. Enjoy the advantages of free account opening and account management, with absolutely no ongoing fees.
              </p>
              <button className="bg-[#489FB5] text-white px-8 py-4 rounded-[30px] hover:bg-opacity-90 transition-colors text-lg font-medium">
                Request your free quote now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* cards section */}
      <Cards />
      

      {/* promotional offers section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our most exclusive fixed deposit offers - available for a limited time only!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Offer 1 - Santander */}
          <div className="rounded-md overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-[#489FC6] text-white text-xs px-3 py-1 inline-block rounded-br-md">
              Tip of the day
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3 p-5">
                <div>
                  <div className="text-[#489FC6] text-xl font-medium">up to</div>
                  <div className="text-[#489FC6] text-4xl font-bold">5.20%</div>
                </div>
                <div className="text-right">
                  <Image
                    src={stander}
                    alt="Santander"
                    width={100}
                    height={30}
                    className="object-contain mb-1"
                  />
                  <div className="text-xs text-center text-gray-700">New customer<br />bonus</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#E5E7EB] py-4 px-4">
                <div className="text-gray-700">6 months | EUR</div>
                <div className="text-[#489FC6] font-medium">Benefit now ›</div>
              </div>
            </div>
          </div>

          {/* Offer 2 - BNP Paribas */}
          <div className="rounded-md overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-[#489FC6] text-white text-xs px-3 py-1 inline-block rounded-br-md">
              Our recommendation
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3 p-5">
                <div>
                  <div className="text-[#489FC6] text-xl font-medium">up to</div>
                  <div className="text-[#489FC6] text-4xl font-bold">4.90%</div>
                </div>
                <div className="text-right">
                  <Image
                    src={bnp}
                    alt="BNP Paribas"
                    width={100}
                    height={30}
                    className="object-contain mb-1"
                  />
                  <div className="text-xs text-center text-gray-700">New customer<br />bonus</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#E5E7EB] py-4 px-4">
                <div className="text-gray-700">1 year | EUR</div>
                <div className="text-[#489FC6] font-medium">Benefit now ›</div>
              </div>
            </div>
          </div>

          {/* Offer 3 - ING */}
          <div className="rounded-md overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-[#489FC6] text-white text-xs px-3 py-1 inline-block rounded-br-md">
              Recommended
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3 p-5">
      <div>
                  <div className="text-[#489FC6] text-xl font-medium">up to</div>
                  <div className="text-[#489FC6] text-4xl font-bold">4.50%</div>
                </div>
                <div className="text-right">
                  <Image
                    src={ing}
                    alt="ING"
                    width={100}
                    height={30}
                    className="object-contain mb-1"
                  />
                  <div className="text-xs text-center text-gray-700">New customer<br />bonus</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#E5E7EB] py-4 px-4">
                <div className="text-gray-700">2 years | EUR</div>
                <div className="text-[#489FC6] font-medium">Benefit now ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* offers section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
        Our most exclusive daily savings offers - available for a limited time only!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Offer 1 - Santander */}
          <div className="rounded-md overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-[#489FC6] text-white text-xs px-3 py-1 inline-block rounded-br-md">
              Tip of the day
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3 p-5">
                <div>
                  <div className="text-[#489FC6] text-xl font-medium">up to</div>
                  <div className="text-[#489FC6] text-4xl font-bold">5.20%</div>
                </div>
                <div className="text-right">
                  <Image
                    src={stander}
                    alt="Santander"
                    width={100}
                    height={30}
                    className="object-contain mb-1"
                  />
                  <div className="text-xs text-center text-gray-700">New customer<br />bonus</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#E5E7EB] py-4 px-4">
                <div className="text-gray-700">6 months | EUR</div>
                <div className="text-[#489FC6] font-medium">Benefit now ›</div>
              </div>
            </div>
          </div>

          {/* Offer 2 - BNP Paribas */}
          <div className="rounded-md overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-[#489FC6] text-white text-xs px-3 py-1 inline-block rounded-br-md">
              Our recommendation
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3 p-5">
                <div>
                  <div className="text-[#489FC6] text-xl font-medium">up to</div>
                  <div className="text-[#489FC6] text-4xl font-bold">4.90%</div>
                </div>
                <div className="text-right">
                  <Image
                    src={bnp}
                    alt="BNP Paribas"
                    width={100}
                    height={30}
                    className="object-contain mb-1"
                  />
                  <div className="text-xs text-center text-gray-700">New customer<br />bonus</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#E5E7EB] py-4 px-4">
                <div className="text-gray-700">1 year | EUR</div>
                <div className="text-[#489FC6] font-medium">Benefit now ›</div>
              </div>
            </div>
          </div>

          {/* Offer 3 - ING */}
          <div className="rounded-md overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-[#489FC6] text-white text-xs px-3 py-1 inline-block rounded-br-md">
              Recommended
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-3 p-5">
                <div>
                  <div className="text-[#489FC6] text-xl font-medium">up to</div>
                  <div className="text-[#489FC6] text-4xl font-bold">4.50%</div>
                </div>
                <div className="text-right">
                  <Image
                    src={ing}
                    alt="ING"
                    width={100}
                    height={30}
                    className="object-contain mb-1"
                  />
                  <div className="text-xs text-center text-gray-700">New customer<br />bonus</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#E5E7EB] py-4 px-4">
                <div className="text-gray-700">2 years | EUR</div>
                <div className="text-[#489FC6] font-medium">Benefit now ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Festgeld24 section */}
      <Festgid />

      {/* CTA section */}
      <div className="bg-[#489FB5] py-32 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
                Discover your individual fixed-term deposit and call money offer!
              </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Image
                src={logo}
                alt="Festgeld24 Logo"
                width={300}
                height={100}
                className="mx-auto md:mx-0 mb-8 filter brightness-0 invert"
              />
            </div>
            <div>
              
              <div className="space-y-4 mb-8">
                <p>
                  At Festgeld24 you will find tailor-made solutions for fixed-term deposits and call money investments that are perfectly tailored to your financial needs and goals.
                </p>
                <p>
                  Our comparison portal offers you a simple and transparent way to determine the best conditions and interest rates for both types of investment.
                </p>
                <p>
                  Benefit from personalized recommendations and secure the most attractive offers on the market - whether flexible with daily money or planning security with fixed-term deposits.
                </p>
                <p>
                  Start today and find the perfect offer for your investment!
                </p>
              </div>
              <button className="bg-[#FF9F1C] hover:bg-opacity-90 text-white font-medium rounded-full px-8 py-4 text-lg transition-colors">
                Request your free quote now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Your money deserves more section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Your money deserves more!</h2>
          
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-gray-700 mb-4">
              Festgeld24 is an independent comparison portal specializing in fixed-income investments such as fixed-term deposits and overnight deposits. We provide private investors with access to attractive investment offers that are otherwise often reserved for institutional investors.
            </p>
            <p className="text-gray-700">
              If you want to plan your wealth accumulation in a targeted manner, you are guaranteed to find the right offer for your savings goals with us - with the best conditions and the highest level of security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#489FB5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 7H15M7 11H17M4.5 17H19.5M11.25 21L18 14.25L11.25 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fixed-interest investments</h3>
              <p className="text-gray-600">
                You have the flexibility to determine how your interest income is paid out—whether monthly, quarterly, annually, or at the end of the term. Easily adapt your investment to your individual needs.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#489FB5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 21H14.5C16.7091 21 18.5 19.2091 18.5 17C18.5 14.7909 16.7091 13 14.5 13H9.5C7.29086 13 5.5 11.2091 5.5 9C5.5 6.79086 7.29086 5 9.5 5H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Investments</h3>
              <p className="text-gray-600">
                Optimize your wealth creation with a reliable partner who understands your financial goals and offers you customized solutions.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#489FB5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Daily money</h3>
              <p className="text-gray-600">
                With a call money account, you remain flexible and can invest or access your money at any time - unlike a fixed-term deposit, which has a fixed term.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment comparison table */}
      <Table />

      {/* Testimonial slider section */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">What our partner banks say about Festgeld24</h2>
          
          <div className="relative">
            {/* Testimonial slides container */}
            <div className="overflow-hidden">
              <div className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-lg">
                        <p className="text-gray-700 text-lg text-center mb-8">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 w-10 h-10 rounded-full  shadow-md flex items-center justify-center z-10 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center items-center mt-8">
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-[#489FB5]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page