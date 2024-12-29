import { retrieveNamePriceQtyArray } from "../controllers/analyzePriceMarketData.js";

export const retrieveMarketAnalysis = async (req, res) => {
  try {
    const response = await retrieveNamePriceQtyArray();
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
  }
};
