/*
 *
 * Education
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Education extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Education" meta={[ { name: 'description', content: 'Description of Education' }]}/>

        <header>

        </header>

        <main>
          <div className="educationBanner">
            <Navbar/>
            <h1>
              LEARN MORE
            </h1>
            <p>
            </p>
          </div>
          <section className="imageBoxes">
            <label className="educationProductBox">
              <img src={require("../../photos/education-products.svg")}/>
              <h2>
                Types of Funds
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="educationPerformanceBox">
              <img src={require("../../photos/education-performance.svg")}/>
              <h2>
                Fund Performance
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="compoundInterestBox">
              <img src={require("../../photos/education-compoundinterest.svg")}/>
              <h2>
                Compound Interest
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="educationExpensesBox">
              <img src={require("../../photos/education-expenses.svg")}/>
              <h2>
                Expenses & Fees
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
          </section>

          <section className="educationInfo">
            <h2>
              Stock and ETF Types
            </h2>
            <h3>
              What type of stock do I what?
            </h3>
            <hr className="educationTitleDivider"/>

            <h4>
              Common Stock
            </h4>
            <p>
              A common stock is a security that represents ownership in a corporation. Stock holders exercise control by electing a board of directors and voting on corporate policy. If the company liquidates, however, common stockholders receive assets only after bondholders, preferred stockholders, and other debt holders have been paid in full.
            </p><br/>

            <h4>
              Preferred Stock
            </h4>
            <p>
            Preferred Stocks take precedence over common stock when dividends are paid or assets are liquidated. A preferred security doesn&#39;t usually carry voting rights.
            </p><br/>

            <h4>
              Foreign Stock
            </h4>
            <p>
            A foreign stock is a stock traded on a local (foreign) exchange.
            </p><br/>

            <h4>
              ETFs
            </h4>
            <p>
            An ETF, or exchange-traded fund, is a marketable security that tracks an index, a commodity, bonds, or a basket of assets like an index fund. Unlike mutual funds, an ETF trades like a common stock on a stock exchange. ETFs experience price changes throughout the day as they are bought and sold. ETFs typically have higher daily liquidity and lower fees than mutual fund shares, making them an attractive alternative for individual investors.
            </p><br/>

            <h4>
              IPO (Initial Public Offering)
            </h4>
            <p>
            A corporation&#39;s first offering of common stock to the public. You can place IPO orders on the morning the security is scheduled to trade on the secondary market.
            </p><br/>

            <h4>
              Dividend
            </h4>
            <p>
            The distribution of the interest or income produced by a mutual fund&#39;s holdings to the fund&#39;s shareholders, or a payment of cash or stock from a company&#39;s earnings to each stockholder. Dividends can be distributed monthly, quarterly, semiannually, or annually.
            </p><br/>

            <h2>
              Stock and ETF Orders
            </h2>
            <h3>
              What type of order should I place?
            </h3>
            <hr className="educationTitleDivider"/>

            <h4>
              Day Order
            </h4>
            <p>
            An order to buy or sell stocks that will expire automatically at the end of the trading day unless it&#39;s executed or canceled. All orders are day orders unless otherwise specified.
            </p><br/>

            <h4>
              Market Order
            </h4>
            <p>
            An order to buy or sell a stock at the best available price. The order is likely to execute immediately if the stock is actively traded and market conditions permit. The execution price isn&#39;t guaranteed and can vary during volatile markets.
            </p><br/>

            <h4>
              Limit Order
            </h4>
            <p>
            An order to buy or sell a security at a specified price (limit price) or better. The execution isn&#39;t guaranteed.
            </p><br/>

            <h4>
              Stop (Stop-Loss) Order
            </h4>
            <p>
            An order that triggers a market order once a specified stock price (the stop price) is reached. This order may execute at a price significantly different from the stop price depending on market conditions.
            </p><br/>

            <h4>
              Stop-Limit Order
            </h4>
            <p>
            An order to buy or sell a security at a limit price or better once a specified price (the stop price) is reached. The limit price should be at or below the stop price for a sale and at or above the stop price for a purchase.
            </p><br/>

            <h4>
              Good-Till-Caneled (GTC) Order
            </h4>
            <p>
            An order to buy or sell stocks that remains open for 60 days after the business day on which the order was placed, or until the order is executed or canceled. If this day falls on a weekend or holiday, the order will be canceled on the next business day before the market opens.
            </p><br/>

            <h2>
              Mutual Funds
            </h2><br/>
            <p>
            A mutual fund is an investment vehicle made up of a pool of money collected from many investors for the purpose of investing in securities such as stocks, bonds, money market instruments and other assets. Mutual funds are operated by professional money managers, who allocate the fund&#39;s investments and attempt to produce capital gains and/or income for the fund&#39;s investors. A mutual fund&#39;s portfolio is structured and maintained to match the investment objectives stated in its prospectus.
            </p><br/>

            <h2>
              Fixed Income Securities and Interest
            </h2><br/>
            <h4>
              Fixed Income Securities
            </h4>
            <p>
            A fixed-income security, commonly referred to as a bond or money market security, is a loan made by an investor to a government or corporate borrower. The borrower, or issuer, promises to pay a set amount of interest, called the coupon, on a predetermined basis until a set date. The issuer returns the principal amount, also called the face or par value, to the investor on the maturity date.
            </p><br/>
            <h4>
            Examples of Fixed Income Securities
            </h4>
            <p>
            Treasury bills are sold by the U.S. government. Corporate bonds are issued by companies. Municipal bonds are issued by states, their agencies and subdivisions. A certificate of deposit (CD) is issued by a bank. Preferred stock pays a dividend in a set dollar amount or percentage of share value on a predetermined schedule. Take for example, a 5% fixed-rate government bond where a $1,000 investment results in an annual $50 payment until maturity when the investor receives the $1,000 back. Generally, these types of assets offer a lower return on investment because they guarantee income.
            </p><br/>
            <h4>
            Compound Interest
            </h4>
            <p>
            Compound interest is interest calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan. The rate at which compound interest accrues depends on the frequency of compounding; the higher the number of compounding periods, the greater the compound interest. Thus, the amount of compound interest accrued on $100 compounded at 10% annually will be lower than that on $100 compounded at 5% semi-annually over the same time period.
            </p><br/>

            <h2>
              Fundamental Analysis
            </h2><br/>
            <p>
            Fundamental analysis is a method of evaluating a security in an attempt to measure its intrinsic value, by examining related economic, financial and other qualitative and quantitative factors. Fundamental analysts study anything that can affect the security&#39;s value, including macroeconomic factors such as the overall economy and industry conditions, and microeconomic factors such as financial conditions and company management. The end goal of fundamental analysis is to produce a quantitative value that an investor can compare with a security&#39;s current price, thus indicating whether the security is undervalued or overvalued.
            </p><br/>

            <h2>
              Technical Analysis
            </h2><br/>
            <p>
            Technical analysis is a trading tool employed to evaluate securities and attempt to forecast their future movement by analyzing statistics gathered from trading activity, such as price movement and volume. Unlike fundamental analysts who attempt to evaluate a security&#39;s intrinsic value, technical analysts focus on charts of price movement and various analytical tools to evaluate a security&#39;s strength or weakness and forecast future price changes.
            </p>

          </section>

          <section>
            <section className="startNowBox">
              <div className="startNowButton">
                <img src={require("../../photos/education-rocket.svg")}/>
                <h3>
                  Buckle Up
                </h3><br/>
                <p>
                  We've taken the guesswork out of investing. Complete our FREE 3 Step Profile Planner to review investment options that line up with YOUR goals. Investing has never been easier.
                </p>
                <input type="button" value="Start Now"/>
              </div>
            </section>
          </section>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

Education.contextTypes = {
  router: React.PropTypes.object
};
