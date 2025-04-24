import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import logo from '../images/logo.png'
import Festgid from '../components/festgid'
import InterestRate from '../components/interestrate'
function SaveMoney() {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">
          The most important things at a glance: Your key to the best daily savings offers!
        </h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="font-bold mb-2">How it works:</h2>
            <p className="text-gray-700">
              Call money offers you the opportunity to invest your money at a variable interest rate without a fixed term. Your balance remains fully accessible at all times, allowing you to respond flexibly to your financial needs.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Interest rates:</h2>
            <p className="text-gray-700">
              Current savings accounts offer attractive interest rates. For example, Suresse Direkt Bank offers an interest rate of 3.20% per annum for new customers with a four-month interest rate guarantee.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Costs:</h2>
            <p className="text-gray-700">
              Call accounts are generally free of charge. However, fees may apply for additional services. Please note that interest rates may vary and it is advisable to check the current conditions of the respective banks.
            </p>
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#5AAFBE] text-white px-6 py-3 rounded-md hover:bg-[#4a9aaa] transition-colors">
              Get a quote now
            </button>
          </div>
        </div>
      </div>
      {/* features section */}
      <Festgid />

      {/* Interest rates and market developments section */}
      <InterestRate />

      {/* Advantages section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">
            Advantages of daily money at a glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Safe & flexible */}
            <div>
              <h3 className="text-xl font-bold mb-4">Safe & flexible</h3>
              <p className="text-gray-700">
                With a call money account, you can invest safely and benefit from attractive interest rates while maintaining full access to your money. Thanks to statutory deposit insurance, your deposits are protected up to €100,000 per bank and customer. Comparing current offers will help you find the best combination of security and return.
              </p>
            </div>

            {/* Free & uncomplicated */}
            <div>
              <h3 className="text-xl font-bold mb-4">Free & uncomplicated</h3>
              <p className="text-gray-700">
                Opening and maintaining a savings account is usually free of charge. Deposits and withdrawals are also usually free of charge, allowing you to manage your money flexibly at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When is a call money account worthwhile section */}
      <div className="bg-[#F3F4F6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">
              When is a call money account worthwhile?
            </h2>

            <p className="text-gray-700 mb-8">
              A call money account is the ideal choice for anyone who wants to invest their money safely and flexibly without sacrificing attractive interest rates. Thanks to the EU-wide deposit guarantee scheme, amounts of up to €100,000 per bank and customer are protected, keeping call money a low-risk savings option.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[17px] mb-2">Save flexibly & available anytime</h3>
                <p className="text-gray-700">
                  Call money is perfect for investors who want to have access to their savings at any time without having to adhere to fixed terms.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[17px] mb-2">Build wealth gradually</h3>
                <p className="text-gray-700">
                  With a daily savings plan, you can deposit money regularly and thus continuously build up your assets - even with small amounts.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[17px] mb-2">Secure your emergency fund</h3>
                <p className="text-gray-700">
                  A savings account is ideal as a financial reserve for unexpected expenses. Experts recommend setting aside at least three months' net income as an emergency fund to easily bridge financial shortfalls.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-8">
              Take advantage of the benefits of a savings account and compare the best offers for your individual needs now!
            </p>
          </div>
        </div>
      </div>

      {/* Call money or fixed-term deposit section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              Call money or fixed-term deposit?
            </h2>

            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed">
                In addition to call money, fixed-term deposits are also a popular investment option. The main difference is that fixed-term deposits have a fixed term and a guaranteed interest rate. During this term, however, the invested capital is not accessible. In return, fixed-term deposit accounts generally offer higher interest rates than call money accounts. The interest is paid either at the end of the term or annually into the reference account. However, there is no compound interest effect, as is possible with call money.
              </p>

              <div>
                <p className="text-gray-700 mb-4">
                  The choice between call money and fixed-term deposits depends on your personal preferences:
                </p>

                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Daily money offers full flexibility and allows access to your money at any time, while</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed-term deposits are invested for a fixed period of time and the money cannot be withdrawn during this time.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                It's advisable to only invest money in a fixed-term deposit account that you won't need to access during the term. You can usually choose the term according to your needs, with options ranging from a few months to ten years.
              </p>

              <p className="text-gray-700 font-medium">
                Decide what suits your financial planning better!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is a call money account used for section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              What is a call money account used for?
            </h2>

            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed">
                Call money accounts generally offer significantly higher interest rates than current accounts and savings accounts. While traditional savings products often yield low interest returns, savers with a call money account benefit from attractive interest rates while retaining full access to their balance.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The money can be transferred in full to the deposited reference account at any time – without notice periods or withdrawal limits, as is the case with savings accounts, for example. Savers often have to observe a three-month notice period or are limited to a maximum monthly withdrawal of €2,000.
              </p>

              <div>
                <h3 className="text-[17px] font-bold mb-4">Optimal use of a call money account</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Financial buffer: Ideal for creating an emergency reserve to cover unexpected expenses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Flexible savings: Money remains separate from daily payments, but remains available at all times.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Targeted savings: Perfect for short-term savings goals, such as vacations, major purchases, or future investments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Attractive interest rates: Opportunity to invest your savings profitably without sacrificing flexibility.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Thanks to these advantages, a call money account is a flexible and secure investment for anyone who wants to access their savings at any time without foregoing the potential for returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why foreign banks offer higher rates section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              Why do many foreign banks offer higher overnight interest rates than German banks?
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Many foreign banks often offer higher interest rates on call money accounts than in Germany. This is due to several factors:
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Different savings behavior:</span> In some countries, the demand for savings is lower, which is why banks create incentives for investors with higher interest rates.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Competition & Market Conditions:</span> The banking sector and competition between credit institutions vary by country. Some banks offer higher interest rates to attract new customers and compete in the market.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Interest rate level in the respective country:</span> The general interest rate level is strongly influenced by national monetary policy. Countries with higher inflation or different economic conditions may also offer higher overnight interest rates.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">EU-wide deposit protection:</span> Even call money accounts at foreign banks within the EU are protected by statutory deposit protection up to €100,000 per customer and bank. This makes them just as secure as German accounts.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                Thanks to these advantages, it can be worthwhile to compare overnight money offers in other EU countries in order to benefit from attractive interest rates and the same security as in Germany.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Taxes on overnight money section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              What taxes are levied on profits (interest) earned from overnight money and how are they paid?
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                In Germany, interest income from call money accounts is subject to a 25% flat-rate withholding tax, a 5.5% solidarity surcharge on the flat-rate withholding tax, and, if applicable, church tax. These taxes are withheld directly by the bank and paid to the tax office.
              </p>

              <p className="text-gray-700 leading-relaxed">
                However, with an exemption order, you can exempt interest income up to a savings allowance of €1,000 per person (or €2,000 for married couples filing jointly). Without such an order, the bank will automatically deduct the taxes. You can reclaim any excess tax paid as part of your income tax return.
              </p>

              <p className="text-gray-700 leading-relaxed">
                If your total income is below the basic tax allowance (2025: €12,096 for singles and €24,192 for married couples), you can apply for a non-assessment certificate (NV certificate) from the tax office. This certificate exempts you from taxation of your interest income, and the bank will pay you the interest income without deduction of taxes.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For overnight money accounts held abroad, an additional withholding tax may apply, which is withheld by the foreign bank. This withholding tax varies by country. In many cases, the withheld withholding tax can be credited against the German withholding tax if a double taxation agreement exists. It is advisable to check the specific regulations of the respective country and, if necessary, submit a certificate of residence to avoid double taxation.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Please note that tax regulations can be complex and subject to change. Therefore, it is recommended that you consult a tax advisor for specific questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interest shopping section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              Can you achieve higher overnight interest rates through interest shopping?
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Many investors engage in interest shopping to take advantage of the best available overnight interest rates. This involves regularly shifting money to overnight money accounts with the currently highest interest rates by switching from bank to bank.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Since call money accounts are generally free of charge, this strategy can be worthwhile to always benefit from optimal interest rates. However, interest shopping requires regular comparisons and a certain investment of time, as bank terms and conditions change frequently.
              </p>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With Festgeld24, interest shopping is particularly easy:
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>One-time registration - direct access to numerous partner banks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Quick comparison - find the best daily money account at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Manage multiple accounts in parallel - switch flexibly between the best offers</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                While interest rate shopping can generate higher returns in the long run, it requires continuous market monitoring. However, those willing to actively use the interest rate market can get the most out of their daily savings by cleverly reallocating their capital.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interest payment intervals section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              How are overnight interest payments paid out and what is the significance of the payment intervals?
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Interest payments on call money accounts vary depending on the bank—monthly, quarterly, semi-annually, or annually. The frequency of interest payments is determined by the respective bank and can have a significant impact on the return.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Shorter payout intervals allow investors to access their interest income more quickly.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The compound interest effect occurs particularly with more frequent interest credits, as the interest already credited is compounded again.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Annual interest payments can still be attractive when interest rates are high, as the overall return over the term can be worthwhile.
              </p>

              <p className="text-gray-700 leading-relaxed">
                In our daily money comparison, you will find transparent information on the respective interest payment intervals so that you can choose the optimal offer for your individual needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimum and maximum deposits section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-10">
              What are the usual minimum and maximum deposits for call money accounts?
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The minimum and maximum deposits for call money accounts vary depending on the bank:
              </p>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold">Minimum amount:</span> Many banks allow you to open a call money account starting from as little as €1, while some require a minimum deposit. It's advisable to check the respective terms and conditions beforehand.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold">Maximum amount:</span> The upper limit is often €100,000, as this amount is protected by the statutory deposit guarantee scheme within the EU. However, some banks set higher or lower limits, especially for special conditions for new customers.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-gray-700 leading-relaxed italic">
                  Important note: The information provided here is for general guidance only and does not constitute tax or financial advice. For individual tax questions or specific investment decisions, we recommend that you consult a tax advisor or a person authorized under Section 2 of the Tax Consultants Act (StBerG).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SaveMoney
