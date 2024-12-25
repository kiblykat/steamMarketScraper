import fs from "fs";
import path from "path";

// Function to scrape JSON data and store in a Map
function scrapeData(data) {
  const itemMap = new Map();

  const marketTransactions = data.listings;
  for (const item of marketTransactions) {
    //is_credit=true:sell, false:buy
    const { name, price, is_credit } = item;
    const currentItem = itemMap.get(name) || { itemCount: 0, totalSpent: 0 };
    let { itemCount, totalSpent } = currentItem;
    if (is_credit) {
      itemMap.set(name, {
        itemCount: itemCount + 1,
        totalSpent: totalSpent + price,
      });
    } else {
      itemMap.set(name, {
        itemCount: itemCount + 1,
        totalSpent: totalSpent - price,
      });
    }
  }
  return [itemMap];
}

const filePath = path.join("json", "16-2-24-marketSales.json");
fs.readFile(filePath, "utf8", (err, jsonString) => {
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
