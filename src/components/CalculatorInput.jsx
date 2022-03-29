import React, { useState } from "react";
import ShareSelector from "./ShareSelector";
import BuyCalcResult from "./BuyCalcResult";
import distributeFunds from "../scripts/buyCalculator";
import styles from "../Styles";

const defaultFormData = {
    ticker: '', 
    price: '', 
    volume: '', 
    desiredAlloc: ''
};

const checkErrors = (formData) => {
    let err = [];

    // must have at least two entries
    if (Object.entries(formData).length < 2) {
        err.push('Your portfolio must contain at least two securities');
    }
    // must enter values for all fields
    Object.values(formData).forEach(values => {
        if (values.ticker === '' || values.price === '' || values.volume === '' || values.desiredAlloc === '') {
            err.push('You must fill out all fields for each security');
        }
    });
    // total allocation should sum to zero
    let allocTotal = Object.values(formData).reduce((prev, curr) => {
        return prev + Number(curr.desiredAlloc);
    }, 0);
    if (allocTotal < 99 || allocTotal > 101) {
        err.push('Desired allocation of all securities should add to 100%');
    }
    // no negative numbers allowed
    if (Object.values(formData).reduce((prev, curr) => {
        return prev || (Number(curr.price) <= 0) || (Number(curr.volume) <= 0) || (Number(curr.desiredAlloc) <= 0);
    }, false)) {
        err.push('All numbers must be positive');
    }

    return err.join('. ');
}

const CalculatorInput = () => {
    const [nextFormID, setNextFormID] = useState(2);
    const [forms, setForms] = useState({1: defaultFormData});

    const [capital, setCapital] = useState(0);
    const [calcResult, setCalcResult] = useState({});
    const [showResult, setShowResult] = useState(false);

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
        const errRes = checkErrors(forms);
        let calcResult = {};

        if (errRes) {
            calcResult = {error: errRes};
        } else {
            // transform form data
            let calcInput = {};
            Object.values(forms).forEach(formData => {
                calcInput[formData.ticker] = {
                    price: Number(formData.price), 
                    volume: parseInt(formData.volume), 
                    desiredAlloc: Number(formData.desiredAlloc)
                };
            });
            calcResult = distributeFunds(calcInput, capital);
        }
        setCalcResult(calcResult);
        setShowResult(true);
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
            <div className='flex flex-row w-full flex-grow flex-wrap'>
                <div className='flex flex-1 justify-start'>
                    <label className={styles.label}>
                        Amount of New Capital
                        <input 
                            className={styles.input_med + ' ml-1'}
                            type='number' min={0}
                            value={capital} 
                            onChange={(e) => setCapital(e.target.value)} />
                    </label>
                </div>
                <div className='flex flex-1 justify-end self-start'>
                    <button onClick={calculateResult} className={styles.btn_pill_blue + ' ml-1'}>
                        Calculate Buy Orders
                    </button>
                </div>
            </div>
            {renderForms()}
            <div className="flex flex-col justify-center items-center">
                <button onClick={addSelector} className={styles.fab_blue}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white h-6 w-6" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {showResult && <BuyCalcResult result={calcResult} closeModal={() => setShowResult(false)} />}
        </div>
    );
}

export default CalculatorInput;
