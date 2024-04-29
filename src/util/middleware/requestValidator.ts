import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
const requestValidate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      const errs = error.errors;
      const errorMessages = errs.map((err: any) => err.message);
      const errorMessagesStr = errorMessages.join(", ");
      return res.status(400).send(errorMessagesStr);
    }
  };

export default requestValidate;
