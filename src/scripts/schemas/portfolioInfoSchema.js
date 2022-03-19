import { validate } from 'json-schema';

const tickerInfoSchema = {
    "id": "/TickerInfo",
    "title": "Ticker info schema", 
    "type": "object", 
    "properties": {
        "desiredAlloc": {
            "type": "number", 
            "minimum": 0, 
            "maximum": 100
        }, 
        "price": {
            "type": "number", 
            "exclusiveMinimum": 0
        }, 
        "volume": {
            "type": "integer", 
            "minimum": 0
        }
    }, 
    "required": ["desiredAlloc", "price", "volume"]
}

const validatePortfolioInfo = (portfolioInfo) => {
    for (const ticker in portfolioInfo) {
        const res = validate(portfolioInfo[ticker], tickerInfoSchema);
        if (!res.valid) {
            return false;
        }
    } 
    return true;
}

export { validatePortfolioInfo };
