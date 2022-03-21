
import { validatePortfolioInfo } from "./schemas/portfolioInfoSchema";

const distributeFunds = (portfolioInfo, newCapital) => {
    const infoIsValid = validatePortfolioInfo(portfolioInfo);
    if (!infoIsValid) {
        console.error("Portfolio info object is invalid");
        return {};
    }

    let new_volume = {};
    let max_share_price = 0;
    let current_portfolio_value = 0;
    for (const ticker in portfolioInfo) {
        const securityInfo = portfolioInfo[ticker];
        new_volume[ticker] = 0;
        max_share_price = Math.max(max_share_price, securityInfo.price);
        current_portfolio_value += securityInfo.volume * securityInfo.price;
    }

    while (newCapital > max_share_price) {
        let allocDiff = {}
        Object.entries(portfolioInfo).forEach(([ticker, values]) => {
            const currentVolume = values.volume + new_volume[ticker]
            const currentAlloc = currentVolume * values.price / current_portfolio_value * 100;
            allocDiff[ticker] = values.desiredAlloc - currentAlloc;
        });

        let ticker_to_buy = Object.keys(allocDiff).reduce((a, b) => {
            return allocDiff[a] > allocDiff[b] ? a : b;
        });
        new_volume[ticker_to_buy] += 1;
        current_portfolio_value += portfolioInfo[ticker_to_buy].price;
        newCapital -= portfolioInfo[ticker_to_buy].price;
    }
    return new_volume;
};

export default distributeFunds;
