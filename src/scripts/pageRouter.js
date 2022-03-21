import BuyCalculatorPage from "../components/pages/BuyCalculatorPage";

const pageMap = {
    "/buy-calculator": <BuyCalculatorPage />
};

const homePage = <BuyCalculatorPage />;

const getPageFromPath = (path) => {
    return pageMap[path];
}

export { getPageFromPath, homePage };
