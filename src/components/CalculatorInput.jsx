import React, { useState } from "react";
import ShareSelector from "./ShareSelector";

const MIN_NUM_SHARES = 2;

const CalculatorInput = () => {
    const [numShares, setNumShares] = useState(MIN_NUM_SHARES);
    const [portfolioInfo, setPortfolioInfo] = useState({});

    const incNumShares = () => {
        setNumShares(numShares + 1);
        setPortfolioInfo({});
    }

    const decNumShares = () => {
        let newNumShares = Math.max(numShares - 1, MIN_NUM_SHARES);
        setNumShares(newNumShares);
        setPortfolioInfo({});
    }

    const submitCall = (shareData) => {
        console.log(`data:${JSON.stringify(shareData)}`)
        const symbol = shareData.ticker;
        const info = shareData.info;
        const newInfo = portfolioInfo;
        newInfo[symbol] = info;
        setPortfolioInfo(newInfo);
    }

    const renderShareSelectors = () => {
        return (
            <ul>
            {new Array(numShares).fill(
                <li><ShareSelector submitDataCallback={submitCall} /></li>
            )}
            </ul>
        );
    }

    return (
        <div className="calculator-input">
            <button onClick={decNumShares}>&#60;</button>{numShares}<button onClick={incNumShares}>&#62;</button>
            {renderShareSelectors()}
        </div>
    );
}

export default CalculatorInput;
