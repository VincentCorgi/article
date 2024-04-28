import { NextFunction, Request, Response } from "express";
import {
  addCorgi,
  getCorgiById,
  getCorgis,
  updateCorgi,
  deleteCorgi,
} from "../service/corgi.service";

export async function addCorgiHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const corgi = await addCorgi(req.body);

    res.status(201).send(corgi);
  } catch (error) {
    next(error);
  }
}
export async function getCorgiByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("Hello Corgi!");
  } catch (error) {
    next(error);
  }
}
export async function getCorgisHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("Hello Corgi!");
  } catch (error) {
    next(error);
  }
}
export async function updateCorgiHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("Hello Corgi!");
  } catch (error) {
    next(error);
  }
}
export async function deleteCorgiHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("Hello Corgi!");
  } catch (error) {
    next(error);
  }
}
