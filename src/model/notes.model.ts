import mongoose from "mongoose";

interface Note {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new mongoose.Schema<Note>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model<Note>("Note", NoteSchema);

export default Note;