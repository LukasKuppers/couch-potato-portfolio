import React from 'react';

const ShareSelector = ({id, ticker, price, volume, desiredAlloc, submit, revoke}) => {

    const handleTickerChange = event => submit(id, 'ticker', event.target.value);

    const handlePriceChange = event => submit(id, 'price', event.target.value);

    const handleVolumeChange = event => submit(id, 'volume', event.target.value);

    const handleAllocChange = event => submit(id, 'desiredAlloc', event.target.value);

    const revokeSelector = () => revoke(id);

    return (
        <div className='share-selector'>
            <label>
                Ticker Symbol or Company Name:
                <input type='text' value={ticker} onChange={handleTickerChange} />
            </label>
            <label>
                Current Share Price:
                <input type='text' value={price} onChange={handlePriceChange} />
            </label>
            <label>
                Current Number of Shares Owned:
                <input type='text' value={volume} onChange={handleVolumeChange} />
            </label>
            <label>
                Desired Allocation in Portfolio:
                <input type='text' value={desiredAlloc} onChange={handleAllocChange} />
            </label>
            <button onClick={revokeSelector}>REMOVE</button>
        </div>
    );
}

export default ShareSelector;
