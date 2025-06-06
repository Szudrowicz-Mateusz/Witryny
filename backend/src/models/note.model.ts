import { Schema, model } from 'mongoose';

export interface INote {
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Note = model<INote>('Note', noteSchema);
