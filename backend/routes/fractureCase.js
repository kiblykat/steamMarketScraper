import { fractureCase } from "../marketPriceHistory/FractureCase.js";

export const retrieveFractureCase = (req,res) => {
  res.status(200).json(fractureCase)
}