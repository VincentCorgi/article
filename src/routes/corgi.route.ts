import { Router } from "express";
import {
  addCorgiHandler,
  getAllCorgiHandler,
  getCorgiByIdHandler,
} from "../controller/corgi.controller";
import requestValidate from "../util/middleware/requestValidator";
import { addCorgiSchema, getCorgiByIdSchema } from "../schema/corgi.schema";
const router = Router();

router.post("/", [requestValidate(addCorgiSchema)], addCorgiHandler);
router.get(
  "/:corgiId",
  [requestValidate(getCorgiByIdSchema)],
  getCorgiByIdHandler
);
router.get("/", getAllCorgiHandler);

export default router;
