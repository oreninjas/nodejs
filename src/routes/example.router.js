import { Router } from "express";
import exampleController from "../controllers/example.controller.js";
const router = Router();

router.get("/", exampleController.example);

export default router;
