This project is meant to find out the amount spent on the steam market, in the aim to calculate how much my current profit is. The marketPriceHistory folder contains relevant items scraped from the steam market to analyze past prices. (Data has to be manually retrieved from the endpoint, exported as json and then put into the json folder at this point in time)

1. go to steam market endpoint: https://steamcommunity.com/market/myhistory/render/?query=&start=0&count=500
2. extract json from endpoint.
3. run the file to find out number of each item bought.
4. find cost of all items bought.

### json folder:

- 16-2-24-marketSales.json: json obtained from Steam Market History Cataloger chrome extension. this one contains the price of each item in easy to manipulate format
- apiResponse.json: json obtained from accessing endpoint https://steamcommunity.com/market/myhistory/render/?query=&start=0&count=500

### marketPriceHistory folder:

- This folder contains relevant items scraped from the steam market to analyze past prices. They are stored in Array objects.
