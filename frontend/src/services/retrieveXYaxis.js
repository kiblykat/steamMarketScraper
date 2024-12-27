//this function populates the map
export const retrieveXYaxis = (data) => {
  const datapointMap = new Map();
  for (let datapoint of data) {
    const [time, price, sales] = datapoint;
    let currTimestamps = datapointMap.get("timestamps");
    let currPrices = datapointMap.get("prices");
    let currTotalSales = datapointMap.get("totalSales");
    currTimestamps ? currTimestamps.push(time) : (currTimestamps = [time]);
    currPrices ? currPrices.push(price) : (currPrices = [price]);
    currTotalSales ? currTotalSales.push(sales) : (currTotalSales = [sales]);

    datapointMap.set("timestamps", currTimestamps);
    datapointMap.set("prices", currPrices);
    datapointMap.set("totalSales", currTotalSales);
  }

  return datapointMap;
};
