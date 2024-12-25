import { count } from "console";
import fs from "fs";

// Function to scrape JSON data and store in a Map
function scrapeData(data) {
  const itemMap = new Map();
  const countMap = new Map();

  const assets = data.assets["730"]["2"];
  for (const key in assets) {
    if (assets.hasOwnProperty(key)) {
      const item = assets[key];
      const { id, name, market_name, original_amount, amount } = item;
      const uniqueKey = `${id}-${name}`;
      const currentCount = countMap.get(name) || 0;
      countMap.set(name, currentCount + 1);
      itemMap.set(uniqueKey, { market_name, original_amount, amount, count });
    }
  }

  return [itemMap, countMap];
}

fs.readFile("apiResponse.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    const itemMap = scrapeData(data);
    console.log(itemMap);
  } catch (err) {
    console.error("Error parsing json", err);
  }
});
