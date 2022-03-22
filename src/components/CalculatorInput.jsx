import React from "react";
import ShareSelector from "./ShareSelector";

const CalculatorInput = () => {
    
    const setShareData = (shareData) => {
        console.log(`CalculatorInput.jsx: retrieved share data: ${JSON.stringify(shareData)}`);
    }

    return (
        <div className="calculator-input">
            <ShareSelector returnShareDataCallback={setShareData} />
        </div>
    );
}

export default CalculatorInput;
