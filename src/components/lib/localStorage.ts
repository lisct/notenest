export type Note = {
  id: string;
  title: string;
  content: string;
  createdTime: string;
};

const STORAGE_KEY = "notes";

const getStoredNotes = (): Note[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const saveStoredNotes = (notes: Note[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const getLocalStorageItem = getStoredNotes;

export const setLocalStorageItem = (newEntry: Note): void => {
  const notes = getStoredNotes();
  saveStoredNotes([...notes, newEntry]);
};

export const removeLocalStorageItem = (noteId: string): void => {
  const updatedNotes = getStoredNotes().filter((note) => note.id !== noteId);
  saveStoredNotes(updatedNotes);
};

export const updateLocalStorageItem = (updatedNote: Note): void => {
  const updatedNotes = getStoredNotes().map((note) =>
    note.id === updatedNote.id ? { ...note, ...updatedNote } : note
  );
  saveStoredNotes(updatedNotes);
};
