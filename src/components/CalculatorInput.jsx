import React, { useState } from "react";
import ShareSelector from "./ShareSelector";
import distributeFunds from "../scripts/buyCalculator";

const defaultFormData = {
    ticker: '', 
    price: '', 
    volume: '', 
    desiredAlloc: ''
};

const CalculatorInput = () => {
    const [nextFormID, setNextFormID] = useState(2);
    const [forms, setForms] = useState({1: defaultFormData});

    const [capital, setCapital] = useState(0);
    const [calcResult, setCalcResult] = useState({});

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

    const calculateResult = () => {
        // transform form data
        let calcInput = {};
        Object.values(forms).forEach(formData => {
            calcInput[formData.ticker] = {
                price: Number(formData.price), 
                volume: parseInt(formData.volume), 
                desiredAlloc: Number(formData.desiredAlloc)
            };
        });

        const calcResult = distributeFunds(calcInput, capital);
        setCalcResult(calcResult);
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
            <label>
                Amount of New Capital:
                <input 
                    type='number' 
                    value={capital} 
                    onChange={(e) => setCapital(e.target.value)} />
            </label>
            {renderForms()}
            <button onClick={addSelector}>ADD</button>
            <button onClick={calculateResult}>CALC</button>
            {JSON.stringify(calcResult)}
        </div>
    );
}

export default CalculatorInput;
