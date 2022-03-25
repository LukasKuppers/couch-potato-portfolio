import React, { useState } from "react";
import ShareSelector from "./ShareSelector";


const CalculatorInput = () => {
    const [nextFormID, setNextFormID] = useState(2);
    const [forms, setForms] = useState({1: {ticker: ''}});

    const addSelector = () => {
        let newForms = structuredClone(forms);
        newForms[nextFormID] = {ticker: ''};
        setForms(newForms);
        setNextFormID(nextFormID + 1);
    }

    const removeSelector = (selectorId) => {
        let newForms = structuredClone(forms);
        delete newForms[selectorId];
        setForms(newForms);
    }

    const submitData = (id, newTicker) => {
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
                        submit={submitData}
                        revoke={removeSelector} /></li>)}
            </ul>
        );
    }

    return (
        <div className="calculator-input">
            {renderForms()}
            <button onClick={addSelector}>ADD</button>
        </div>
    );
}

export default CalculatorInput;
