
import { validatePortfolioInfo } from "./schemas/portfolioInfoSchema";

const distributeFunds = (portfolioInfo, newCapital) => {
    const infoIsValid = validatePortfolioInfo(portfolioInfo);
    if (!infoIsValid) {
        console.error("Portfolio info object is invalid");
        return {};
    }

    let new_volume = {}
    for (const ticker in portfolioInfo) {
        new_volume[ticker] = 0;
    }
    return new_volume;
};

export default distributeFunds;
