import React, { useState } from "react";
import ShareSelector from "./ShareSelector";


const CalculatorInput = () => {
    const [forms, setForms] = useState({1: {ticker: ''}});

    const onChangeTicker = (id, newTicker) => {
        console.log(`change ticker:id:${id},ticker:${newTicker}`);
        let newForms = structuredClone(forms);
        newForms[id].ticker = newTicker;
        setForms(newForms);
    }

    const renderForms = () => {
        return (
            <ul>
                {Object.entries(forms).map(([key, data]) =>
                    <li key={key}><ShareSelector 
                        id={key} 
                        ticker={data.ticker} 
                        onChangeTicker={onChangeTicker} /></li>)}
            </ul>
        );
    }

    return (
        <div className="calculator-input">
            {renderForms()}
        </div>
    );
}

export default CalculatorInput;
