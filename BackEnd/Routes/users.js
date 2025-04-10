import express from "express";
import { loginUser, registerUser, getCarros, getCarrosById, updateCarro, deleteCarro, createCarro } from "../Controllers/users.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/carros", getCarros); 
router.get("/carros/:id", getCarrosById); 
router.delete("/carros/:id", deleteCarro); 
router.put("/carros/:id", updateCarro); 
router.delete("/carros/:id", deleteCarro);
router.post("/carros", createCarro);

export default router;