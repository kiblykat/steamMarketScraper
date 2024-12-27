import express from "express";
import cors from "cors";
import { retrieveCS20Case, retrieveDangerZoneCase, retrieveFractureCase, retrieveHorizonCase, retrievePrisma2Case, retrievePrismaCase, retrieveSnakebiteCase } from "./routes/caseRoutes.js";

const app = express();
app.use(cors());
const port = 3001;

app.get("/api/data/cs20-case", retrieveCS20Case);
app.get("/api/data/danger-zone-case", retrieveDangerZoneCase);
app.get("/api/data/fracture-case", retrieveFractureCase);
app.get("/api/data/horizon-case", retrieveHorizonCase);
app.get("/api/data/prisma-2-case", retrievePrisma2Case);
app.get("/api/data/prisma-case", retrievePrismaCase);
app.get("/api/data/snakebite-case", retrieveSnakebiteCase);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
