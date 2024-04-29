import { Request, Response, NextFunction } from "express";

const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "some errors";
  return res.status(statusCode).send(message).end();
};

export default errorHandler;
