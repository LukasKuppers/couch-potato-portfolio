import React from "react";
import CalculatorInput from "../CalculatorInput";
import styles from "../../Styles";

const BuyCalculatorPage = () => {


    return (
        <div className="buy-calculator-page">
            <div className="mb-5">
                <span className={styles.text_title}>Buy Calculator</span>
            </div>
            <p className='text-lg'>
                The buy calculator determines how many shares of each security in your portfolio you should buy, to meet your desired portfolio allocation. Use the form below to enter your current portfolio information, and press 'calculate buy orders' to see the result. Use the blue 'plus' icon to add more securities, or the red 'trash' icon to remove a security.
            </p>
            <hr className="my-5"/>
            <CalculatorInput />
        </div>
    );
}

export default BuyCalculatorPage;
