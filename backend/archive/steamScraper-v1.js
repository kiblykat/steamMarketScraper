import fs from "fs";
import path from "path";

// Function to scrape JSON data and store in a Map
function scrapeData(data) {
  const itemMap = new Map();
  const countMap = new Map();

  const gameObject = data.assets;
  for (const game in gameObject) {
    if (gameObject.hasOwnProperty(game)) {
      const inventory = gameObject[game]["2"];
      for (const key in inventory) {
        if (inventory.hasOwnProperty(key)) {
          const item = inventory[key];
          const { id, name, market_name, original_amount, amount } = item;
          const uniqueKey = `${id}-${name}`;
          const currentCount = countMap.get(name) || 0;
          countMap.set(name, currentCount + 1);
          itemMap.set(uniqueKey, {
            market_name,
            original_amount,
            amount,
          });
        }
      }
    }
  }

  return [itemMap, countMap];
}

const filePath = path.join("json", "apiResponse.json");
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
