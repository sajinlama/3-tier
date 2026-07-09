import Note from "../model/notes.model.js";

export const addNotes = async (title: string, description: string) => {
  return await Note.create({ title, description });
};


export const getNotes =async ()=>{
    return await Note.find();
}