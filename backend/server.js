import express from "express";
import { fractureCase } from "./marketPriceHistory/FractureCase";

const app = express();
const port = 3001;

let data = app.get("/api/data", (req, res) => {
  res.json(fractureCase);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
