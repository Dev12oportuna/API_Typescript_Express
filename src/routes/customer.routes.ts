import { Router } from "express";
import { getHistory, get_categorias, usuarios_config } from "../controllers/customer.controller";
const router = Router()

router.get("/usuarios_config", usuarios_config)

router.get("/getHistory", getHistory)

router.get("/get_categorias", get_categorias)


export default router