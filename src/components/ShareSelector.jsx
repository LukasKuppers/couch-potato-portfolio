import React, { useState } from 'react';

const ShareSelector = () => {
    const [tickerInput, setTickerInput] = useState('');

    const handleSubmit = (event) => {
        console.log(`DEBUG:submit ticker:${event.target.value}`);
        event.preventDefault();
    }

    const handleNewInput = (event) => {
        setTickerInput(event.target.value);
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
