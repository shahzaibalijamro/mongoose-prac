import express from "express";
import { addTodo, getTodos } from "../controllers/todos.controllers.js";

const router = express.Router()

router.post("/todo",addTodo)
router.get("/todo/all",getTodos)
export default router