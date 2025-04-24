import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footer1 from '../images/footer-image1.png'
import footer2 from '../images/footer-image2.png'
import footer3 from '../images/footer-image3.png'

const Footer = () => {
  return (
    <footer className=" border-gray-200 py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos row */}
        <div className="flex justify-between items-center mb-4">
          {/* Left side logo */}
          <div className="w-20 h-16 relative flex items-center">
            <Image
              src={footer1}
              alt="TÜV Quality Standard"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>
          
          {/* Right side logos */}
          <div className="flex items-center space-x-4">
            <div className="w-24 h-16 relative flex items-center">
              <Image
                src={footer2}
                alt="Standort Deutschland"
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 relative flex items-center">
              <Image
                src={footer3}
                alt="EU Certification"
                width={60}
                height={60}
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-200 my-4" />
        
        {/* Links row */}
        <div className="flex justify-start items-center text-xs text-gray-600">
          <Link href="/imprint" className="hover:text-gray-900 mr-4">
            Imprint
          </Link>
          <Link href="/data-protection" className="hover:text-gray-900 mr-4">
            Data protection
          </Link>
          <span className="text-gray-500">© 2023 Festgeld24</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer