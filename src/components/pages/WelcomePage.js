import React from "react";
import styles from "../../Styles";

const WelcomePage = () => {
    return (
        <div className='mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                    <span className='block'>Practical tools for</span>
                    <span className='block text-blue-600'>DIY Investing</span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl-sm:mx-auto md:text-xl lg:mx-0'>
                    DIY Invest Help is built to assist new or experienced DIY investors in managing their portfolios. The buy calculator determines how many shares of each security you should buy to maintain your portfolio's desired allocation, making DCA-ing easier.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                    <div className='rounded-md shadow'>
                        <a href='/buy-calculator' className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'>
                            Buy Calculator
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
