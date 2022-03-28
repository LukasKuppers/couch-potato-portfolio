import React, { useState } from "react";
import ShareSelector from "./ShareSelector";
import distributeFunds from "../scripts/buyCalculator";
import styles from "../Styles";

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
            <label className={styles.label}>
                Amount of New Capital
                <input 
                    className={styles.input_small}
                    type='number' 
                    value={capital} 
                    onChange={(e) => setCapital(e.target.value)} />
            </label>
            <button onClick={calculateResult} className={styles.btn_pill_blue}>
                Calculate Buy Orders
            </button>
            {renderForms()}
            <div className="flex flex-col justify-center items-center">
                <button onClick={addSelector} className={styles.fab_blue}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white h-6 w-6" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {JSON.stringify(calcResult)}
        </div>
    );
}

export default CalculatorInput;
