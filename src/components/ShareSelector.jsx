import React from 'react';
import styles from '../Styles';

const labelClass = styles.label + ' mr-2';
const inputClass = styles.input_med;

const ShareSelector = ({id, ticker, price, volume, desiredAlloc, submit, revoke}) => {

    const handleTickerChange = event => submit(id, 'ticker', event.target.value);

    const handlePriceChange = event => submit(id, 'price', event.target.value);

    const handleVolumeChange = event => submit(id, 'volume', event.target.value);

    const handleAllocChange = event => submit(id, 'desiredAlloc', event.target.value);

    const revokeSelector = () => revoke(id);

    return (
        <div className='share-selector bg-white rounded-xl drop-shadow-xl mt-5 mb-5 p-5 flex flex-col lg:flex-row flex-shrink-0 justify-around'>
            <label className={labelClass}>
                <span className='mr-2'>Ticker Symbol</span>
                <input className={inputClass} type='text' value={ticker} onChange={handleTickerChange} />
            </label>
            <label className={labelClass}>
                <span className='mr-2'>Current Share Price</span>
                <input className={inputClass} type='number' value={price} onChange={handlePriceChange} />
            </label>
            <label className={labelClass}>
                <span className='mr-2'>Shares Owned</span>
                <input className={inputClass} type='number' value={volume} onChange={handleVolumeChange} />
            </label>
            <label className={labelClass}>
                <span className='mr-2'>Desired Allocation</span>
                <input className={inputClass} type='number' value={desiredAlloc} onChange={handleAllocChange} />
            </label>
            <button onClick={revokeSelector} className={styles.fab_red}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground='new 0 0 20 20' className="fill-white h-6 w-6" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}

export default ShareSelector;
