import express from "express";
import cors from "cors";
import {
  retrieveChromaCase,
  retrieveCS20Case,
  retrieveDangerZoneCase,
  retrieveFractureCase,
  retrieveHorizonCase,
  retrievePrisma2Case,
  retrievePrismaCase,
  retrieveSnakebiteCase,
  retrieveFalchionCase,
  retrieveGammaCase,
  retrieveGloveCase,
  retrieveHuntsmanWeaponCase,
  retrieveOperationBreakoutWeaponCase,
  retrieveOperationBrokenFangCase,
  retrieveOperationHydraCase,
  retrieveOperationRiptideCase,
  retrieveShadowCase,
  retrieveWinterOffensiveWeaponCase,
  retrieveRecoilCase,
} from "./routes/caseRoutes.js";
import { retrieveMarketAnalysis } from "./routes/analyzePriceMarketRoute.js";

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
app.get("/api/data/chroma-case", retrieveChromaCase);
app.get("/api/data/falchion-case", retrieveFalchionCase);
app.get("/api/data/gamma-case", retrieveGammaCase);
app.get("/api/data/glove-case", retrieveGloveCase);
app.get("/api/data/huntsman-weapon-case", retrieveHuntsmanWeaponCase);
app.get("/api/data/recoil-case", retrieveRecoilCase);
app.get(
  "/api/data/operation-breakout-weapon-case",
  retrieveOperationBreakoutWeaponCase
);
app.get(
  "/api/data/operation-broken-fang-case",
  retrieveOperationBrokenFangCase
);
app.get("/api/data/operation-hydra-case", retrieveOperationHydraCase);
app.get("/api/data/operation-riptide-case", retrieveOperationRiptideCase);
app.get("/api/data/shadow-case", retrieveShadowCase);
app.get(
  "/api/data/winter-offensive-weapon-case",
  retrieveWinterOffensiveWeaponCase
);

app.get("/api/data/analyze-price-market", retrieveMarketAnalysis);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
