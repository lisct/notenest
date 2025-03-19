export type Note = {
  id: string;
  title: string;
  content: string;
  createdTime: string;
};

export const getLocalStorageItem = () => {
  const entries = localStorage.getItem("notes");
  return entries ? JSON.parse(entries) : [];
};

export const setLocalStorageItem = (newEntry: Note) => {
  const entries = JSON.parse(localStorage.getItem("notes") || "[]");
  entries.push(newEntry);
  localStorage.setItem("notes", JSON.stringify(entries));
};

export const removeLocalStorageItem = (noteId: string): void => {
  const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
  const updatedNotes: Note[] = notes.filter((note) => note.id !== noteId);
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};
