import { Request, Response } from "express";
import { addNotes } from "../service/notes.service.js";
import { getNotes } from "../service/notes.service.js";

export const createNote = async (req: Request, res: Response) => {
  try {
    const note = await addNotes(
      req.body.title,
      req.body.description
    );

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to create note" });
  }
};

export const getAllNotes= async (req:Request, res:Response)=>{
    try {
        const allNotes =await getNotes();
        res.json({
            allNotes
        })
    } catch (error) {
        console.log(error);
        res.send({
            stauts:404,
            message:error
        })
        
    }
}