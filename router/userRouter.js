import { Router } from "express";
import { createUser } from "../controller/userControl.js";


const router = Router();

router.post('/create', createUser);

export default router;