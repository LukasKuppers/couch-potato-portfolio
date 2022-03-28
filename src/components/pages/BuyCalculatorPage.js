import React from "react";
import CalculatorInput from "../CalculatorInput";
import styles from "../../Styles";

const BuyCalculatorPage = () => {


    return (
        <div className="buy-calculator-page">
            <div className="mb-5">
                <span className={styles.text_title}>Buy Calculator</span>
            </div>
            <CalculatorInput />
        </div>
    );
}

export default BuyCalculatorPage;
