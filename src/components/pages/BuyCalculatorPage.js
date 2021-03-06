import React from "react";
import CalculatorInput from "../CalculatorInput";
import styles from "../../Styles";

const BuyCalculatorPage = () => {


    return (
        <div className="buy-calculator-page">
            <div className="mb-5">
                <span className={styles.text_title}>Buy Calculator</span>
            </div>
            <p className='text-gray-500 text-xl'>
                The buy calculator determines how many shares of each security in your portfolio you should buy, to meet your desired portfolio allocation. The Buy Calculator is designed to assist in buying shares when dollar cost averaging. Use the form below to enter your current portfolio information, and press 'calculate buy orders' to see the result. Use the blue 'plus' icon to add more securities, or the red 'trash' icon to remove a security.
            </p>
            <div className="mb-5 mt-4">
                <span className={styles.text_title}>Rebalance Calculator</span>
            </div>
            <p className='text-gray-500 text-xl'>
                The rebalance calculator determines how many shares you should buy and sell in your portfolio in order to regain your desired allocation. The rebalance calculator is inteneded for portfolios which have become unbalanced over time, and simply want to reset to their desired allocations without adding new funds. Negative values in the output indicate that you should sell the security.
            </p>
            <hr className="my-5"/>
            <CalculatorInput />
        </div>
    );
}

export default BuyCalculatorPage;
