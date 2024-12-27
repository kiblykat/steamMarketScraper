import express from "express";
import cors from "cors";
import { retrieveFractureCase } from "./routes/fractureCase.js";

const app = express();
app.use(cors());
const port = 3001;

app.get("/api/data/fracture-case", retrieveFractureCase);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
