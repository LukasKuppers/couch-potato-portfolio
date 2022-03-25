import React, { useState } from "react";
import ShareSelector from "./ShareSelector";

const defaultFormData = {
    ticker: '', 
    price: '', 
    volume: '', 
    desiredAlloc: ''
};

const CalculatorInput = () => {
    const [nextFormID, setNextFormID] = useState(2);
    const [forms, setForms] = useState({1: defaultFormData});

    const addSelector = () => {
        let newForms = structuredClone(forms);
        newForms[nextFormID] = defaultFormData;
        setForms(newForms);
        setNextFormID(nextFormID + 1);
    }

    const removeSelector = (selectorId) => {
        let newForms = structuredClone(forms);
        delete newForms[selectorId];
        setForms(newForms);
    }

    const submitData = (id, dataKey, newData) => {
        let newForms = structuredClone(forms);
        newForms[id][dataKey] = newData;
        setForms(newForms);
    }

    const renderForms = () => {
        return (
            <ul>
                {Object.entries(forms).map(([key, data]) =>
                    <li key={key}><ShareSelector 
                        id={key} 
                        ticker={data.ticker} 
                        price={data.price}
                        volume={data.volume}
                        desiredAlloc={data.desiredAlloc}
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
