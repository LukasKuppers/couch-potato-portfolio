import React, { useState } from "react";
import ShareSelector from "./ShareSelector";

const MIN_NUM_SHARES = 2;

const CalculatorInput = () => {
    const [numShares, setNumShares] = useState(MIN_NUM_SHARES);
    const [portfolioInfo, setPortfolioInfo] = useState({});

    const submitCall = (shareData) => {
        const symbol = shareData.ticker;
        const info = shareData.info;
        const newInfo = portfolioInfo;
        newInfo[symbol] = info;
        setPortfolioInfo(newInfo);
    }
    
    const revokeCall = (tickerSymbol) => {
        console.log(`CalculatorInput.jsx:DEBUG:removing share:${tickerSymbol}`);
    }

    const addNewShare = () => {
        setNumShares(numShares + 1);
    }

    const renderShareSelectors = () => {
        return (
            <ul>
            {new Array(numShares).fill(
                <li><ShareSelector submitDataCallback={submitCall} revokeDataCallback={revokeCall} /></li>
            )}
            </ul>
        );
    }

    return (
        <div className="calculator-input">
            {renderShareSelectors()}
            <button onClick={addNewShare}>ADD</button>
        </div>
    );
}

export default CalculatorInput;
