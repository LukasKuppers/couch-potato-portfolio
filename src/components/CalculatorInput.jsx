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
            <label className='block text-gray-500 font-bold mb-2'>
                Amount of New Capital
                <input 
                    className='ml-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                    type='number' 
                    value={capital} 
                    onChange={(e) => setCapital(e.target.value)} />
            </label>
            <button onClick={calculateResult} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Calculate Buy Orders
            </button>
            {renderForms()}
            <div className="flex flex-col justify-center items-center">
                <button onClick={addSelector} className='mt-1 p-2 w-10 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg focus:outline-none drop-shadow-lg'>
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
