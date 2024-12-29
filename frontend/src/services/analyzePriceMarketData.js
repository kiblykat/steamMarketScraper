// this file is meant to analyze market data based on endpoint from steam market api.
// an example api for searching cases in CS is container is:
// https://steamcommunity.com/market/search/render/?query=case&start=0&count=50&search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_Tournament%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Type%5B%5D=tag_CSGO_Type_WeaponCase&category_730_Weapon%5B%5D=any
import axios from "axios";
import { marketCasesSearchData } from "../../jsonData/marketCasesSearch";

export const url =
  "https://steamcommunity.com/market/search/render/?query=case&start=0&count=50&search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_Tournament%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Type%5B%5D=tag_CSGO_Type_WeaponCase&category_730_Weapon%5B%5D=any";

export const getJsonData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const retrieveNamePriceQtyArray = async () => {
  const jsonData = marketCasesSearchData.results_html;
  const namePattern = /data-hash-name="([^"]+)"/g;
  const pricePattern = /data-price="(\d+)"/g;
  const qtyPattern = /data-qty="(\d+)"/g;

  // Extract data using matchAll
  const names = Array.from(jsonData.matchAll(namePattern), (match) => match[1]);
  const prices = Array.from(
    jsonData.matchAll(pricePattern),
    (match) => match[1]
  );
  const quantities = Array.from(
    jsonData.matchAll(qtyPattern),
    (match) => match[1]
  );
  console.log(names, prices, quantities);

  //transform into array of objects
  const combinedData = names.map((name, index) => ({
    name: name,
    price: parseInt(prices[index]),
    quantity: parseInt(quantities[index]),
  }));

  combinedData.sort((a, b) => b.quantity - a.quantity);
  const sortedNames = combinedData.map((item) => item.name);
  const sortedPrices = combinedData.map((item) => item.price);
  const sortedQuantities = combinedData.map((item) => item.quantity);

  return [sortedNames, sortedPrices, sortedQuantities];
};

// data-hash-name=\"Chroma Case\">
// data-price=\"538\"
// data-qty=\"2416\"
