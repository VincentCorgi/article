import { NextFunction, Request, Response } from "express";
import { addCorgi, getCorgiById, getCorgiList } from "../service/corgi.service";
import { addCorgiInput, getCorgiByIdInput } from "../schema/corgi.schema";

export async function addCorgiHandler(
  req: Request<object, object, addCorgiInput["body"]>,
  res: Response,
  next: NextFunction
) {
  try {
    const { corgiId } = req.body;
    await addCorgi(req.body);
    const corgi = await getCorgiById(corgiId);

    if (!corgi) return res.sendStatus(404).end();
    res.status(201).send(corgi);
  } catch (error) {
    next(error);
  }
}
export async function getCorgiByIdHandler(
  req: Request<getCorgiByIdInput["params"]>,
  res: Response,
  next: NextFunction
) {
  try {
    const { corgiId } = req.params;
    const corgi = await getCorgiById(corgiId);

    if (!corgi) return res.sendStatus(404).end();
    res.status(200).send(corgi);
  } catch (error) {
    next(error);
  }
}
export async function getAllCorgiHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const corgiList = await getCorgiList();
    res.status(200).send(corgiList);
  } catch (error) {
    next(error);
  }
}
