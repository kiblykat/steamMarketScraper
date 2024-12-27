import { CS20Case } from "../marketPriceHistory/CS20Case.js";
import { DangerZoneCase } from "../marketPriceHistory/DangerZoneCase.js";
import { FractureCase } from "../marketPriceHistory/FractureCase.js";
import { HorizonCase } from "../marketPriceHistory/HorizonCase.js";
import { Prisma2Case } from "../marketPriceHistory/Prisma2Case.js";
import { PrismaCase } from "../marketPriceHistory/PrismaCase.js";
import { SnakebiteCase } from "../marketPriceHistory/SnakebiteCase.js";
import { ChromaCase } from "../marketPriceHistory/ChromaCase.js";

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
