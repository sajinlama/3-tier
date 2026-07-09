import { Router } from "express";
import { createNote, getAllNotes } from "../controller/notes.controller.js";

const router = Router();

router.post("/notes", createNote);
router.get("/getNotes", getAllNotes);

export default router;