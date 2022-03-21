import BuyCalculatorPage from "../components/pages/BuyCalculatorPage";
import WelcomePage from "../components/pages/WelcomPage";

const pageMap = {
    "/": <WelcomePage />, 
    "/home": <WelcomePage />, 
    "/buy-calculator": <BuyCalculatorPage />
};

const homePage = <BuyCalculatorPage />;

const getPageFromPath = (path) => {
    return pageMap[path];
}

export { getPageFromPath, homePage };
