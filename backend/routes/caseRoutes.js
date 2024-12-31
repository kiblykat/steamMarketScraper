import { CS20Case } from "../marketPriceHistory/CS20Case.js";
import { DangerZoneCase } from "../marketPriceHistory/DangerZoneCase.js";
import { FractureCase } from "../marketPriceHistory/FractureCase.js";
import { HorizonCase } from "../marketPriceHistory/HorizonCase.js";
import { Prisma2Case } from "../marketPriceHistory/Prisma2Case.js";
import { PrismaCase } from "../marketPriceHistory/PrismaCase.js";
import { SnakebiteCase } from "../marketPriceHistory/SnakebiteCase.js";
import { ChromaCase } from "../marketPriceHistory/ChromaCase.js";
import { FalchionCase } from "../marketPriceHistory/FalchionCase.js";
import { GammaCase } from "../marketPriceHistory/GammaCase.js";
import { GloveCase } from "../marketPriceHistory/GloveCase.js";
import { HuntsmanWeaponCase } from "../marketPriceHistory/HuntsmanWeaponCase.js";
import { OperationBreakoutWeaponCase } from "../marketPriceHistory/OperationBreakoutWeaponCase.js";
import { OperationBrokenFangCase } from "../marketPriceHistory/OperationBrokenFangCase.js";
import { OperationHydraCase } from "../marketPriceHistory/OperationHydraCase.js";
import { OperationRiptideCase } from "../marketPriceHistory/OperationRiptideCase.js";
import { ShadowCase } from "../marketPriceHistory/ShadowCase.js";
import { WinterOffensiveWeaponCase } from "../marketPriceHistory/WinterOffensiveWeaponCase-do not use.js";

export const retrieveCS20Case = (req, res) => {
  res.status(200).json(CS20Case);
};
export const retrieveDangerZoneCase = (req, res) => {
  res.status(200).json(DangerZoneCase);
};
export const retrieveFractureCase = (req, res) => {
  res.status(200).json(FractureCase);
};
export const retrieveHorizonCase = (req, res) => {
  res.status(200).json(HorizonCase);
};
export const retrievePrisma2Case = (req, res) => {
  res.status(200).json(Prisma2Case);
};
export const retrievePrismaCase = (req, res) => {
  res.status(200).json(PrismaCase);
};
export const retrieveSnakebiteCase = (req, res) => {
  res.status(200).json(SnakebiteCase);
};
export const retrieveChromaCase = (req, res) => {
  res.status(200).json(ChromaCase);
};
export const retrieveFalchionCase = (req, res) => {
  res.status(200).json(FalchionCase);
};
export const retrieveGammaCase = (req, res) => {
  res.status(200).json(GammaCase);
};
export const retrieveGloveCase = (req, res) => {
  res.status(200).json(GloveCase);
};
export const retrieveHuntsmanWeaponCase = (req, res) => {
  res.status(200).json(HuntsmanWeaponCase);
};
export const retrieveOperationBreakoutWeaponCase = (req, res) => {
  res.status(200).json(OperationBreakoutWeaponCase);
};
export const retrieveOperationBrokenFangCase = (req, res) => {
  res.status(200).json(OperationBrokenFangCase);
};
export const retrieveOperationHydraCase = (req, res) => {
  res.status(200).json(OperationHydraCase);
};
export const retrieveOperationRiptideCase = (req, res) => {
  res.status(200).json(OperationRiptideCase);
};
export const retrieveShadowCase = (req, res) => {
  res.status(200).json(ShadowCase);
};
export const retrieveWinterOffensiveWeaponCase = (req, res) => {
  res.status(200).json(WinterOffensiveWeaponCase);
};
