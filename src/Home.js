import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon banner"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="From Financially Stressed To Money Blessed: Become Financially Independent and Retire Early At Any Age"
            price={1999}
            priceToShow="$19.99"
            // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            image="https://images-na.ssl-images-amazon.com/images/I/51OmODMzYWL._SX331_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="The Pivot Point System: 5 Keys To Unlock Your Career, Health and Wealth"
            price={999}
            priceToShow="$9.99"
            // image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            image="https://m.media-amazon.com/images/I/41rDeBtEX4L._SX260_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="1 Hour Coaching Session: Learn How Blockchain Can Solve Your Business Problem"
            price={99999}
            priceToShow="$999.99"
            image="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg"
            rating={5}
            // image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Get Ahead In Real Estate Game: Upload Your Property Onto Blockchain"
            price={39997}
            priceToShow="$399.97"
            image="https://butterflymx.com/wp-content/uploads/2021/04/Buying-Property-Blockchain.jpg"
            rating={5}
            // image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Real Estate Challenge: Learn How To Buy Properties For Pennies On The Dollar And Sell For Huge Profit"
            price={159797}
            priceToShow="$1597.97"
            image="https://readdive.com/wp-content/uploads/2020/02/Future-of-Blockchain-Technology-in-Real-Estate.jpg"
            rating={5}
            // image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Blockchain Real Estate Bundle: 1 Hour Coaching Session, 2 Property Uploads, Full Real Estate Investing Course"
            price={269797}
            priceToShow="$2697.97"
            image="https://klizos.com/wp-content/uploads/Blockchain-in-real-estate-banner.png"
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
