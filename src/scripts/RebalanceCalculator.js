import distributeFunds from "./buyCalculator";
import { validatePortfolioInfo } from "./schemas/portfolioInfoSchema";

const rebalanceFunds = (portfolioInfo) => {
    const infoIsValid = validatePortfolioInfo(portfolioInfo);
    if (!infoIsValid) {
        console.error("Portfolio info object is invalid");
        return { buy: {}, sell: {} };
    }

    // determine total portfolio value
    totalValue = getTotalValue(portfolioInfo);

    // feed empty portfolio into buy calculator, with total value as capital
    emptyPortfolio = Object.assign({}, portfolioInfo);
    for (const ticker in emptyPortfolio) {
        emptyPortfolio[ticker].volume = 0;
    }
    balancedVolumes = distributeFunds(portfolioInfo, totalValue);

    // return differences between current and optimal
    volume_diff = {};
    for (const ticker in portfolioInfo) {
        volume_diff[ticker] = balancedVolumes[ticker] - portfolioInfo[ticker].volume;
    }
    return volume_diff;
};

const getTotalValue = (portfolioInfo) => {
    return Object.entries(portfolioInfo).map(([ticker, values]) => {
        return values.price * values.volume;
    }).reduce((prev, curr) => prev + curr, 0);
}

export default rebalanceFunds;
