import React, { useState } from 'react';

const ShareSelector = ({returnShareDataCallback}) => {
    const [tickerInput, setTickerInput] = useState('');

    const handleNewInput = (event) => {
        setTickerInput(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(`ShareSelector.jsx: DEBUG: submitted query: ${tickerInput}`);
        returnShareDataCallback({
            'ticker': tickerInput
        });
        event.preventDefault();
    }

    return (
        <div className='share-selector'>
            <form onSubmit={handleSubmit}>
                <label>
                    Ticker Symbol or Company Name:
                    <input type='text' value={tickerInput} onChange={handleNewInput} />
                </label>
            </form>
        </div>
    );
}

export default ShareSelector;
