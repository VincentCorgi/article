import { Router } from "express";
import {
  addCorgiHandler,
  deleteCorgiHandler,
  getCorgiByIdHandler,
  getCorgisHandler,
  updateCorgiHandler,
} from "../controller/corgi.controller";
const router = Router();

router.post("/", addCorgiHandler);
router.get("/:corgiId", getCorgiByIdHandler);
router.get("/", getCorgisHandler);
router.patch("/:corgiId", updateCorgiHandler);
router.delete("/:corgiId", deleteCorgiHandler);

export default router;
