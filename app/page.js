"use client"

import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Image from 'next/image'
import logo from './images/logo.png'
import styles from './styles/Banner.module.css'
import stander from './images/santander.png'
import ing from './images/ing.png'
import bnp from './images/bnp.png'

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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Attractive fixed-interest offers for your asset growth</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-left">Investment form</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center">Solid investment</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center">Growth opportunity</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center">Premium investment</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center">Exclusive option</th>
                  <th className="bg-[#489FB5] text-white py-4 px-4 border border-[#3D8DA3] text-center">Top returns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Interest / return pa</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">from 3.50%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">4.80% to 5.50%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">6.00%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">4.50% - 7.00%</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">up to 8% pa</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Minimum investment</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">5,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">10,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">15,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">20,000.00 €</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">from 1,000.00 €</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Duration</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">from 6 months</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">1 to 3 years</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">3 to 5 years</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">from 2 years</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">flexible up to 10 years</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Interest payment</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">monthly</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">quarterly</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">yearly</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">as desired</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-center">daily (daily money)</td>
                </tr>
                <tr>
                  <td className="bg-[#E9F3F6] py-3 px-4 border border-gray-300 font-medium">Advantages</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-sm">Cooperation with leading EU banks High stability through top ratings EU-wide deposit guarantee</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-sm">Long term partnerships with prime banks Attractive conditions through exclusive banking agreements</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-sm">Premium offers from renowned financial institutions Experience from international financial markets</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-sm">Direct processing via prime banks Highest security standards according to EU regulations</td>
                  <td className="bg-white py-3 px-4 border border-gray-300 text-sm">Exclusive conditions with top international banks Access to high-yield markets</td>
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
            <button className="bg-[#FF9F1C] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-lg font-medium">
              Request your free quote now!
            </button>
          </div>
        </div>
      </div>

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