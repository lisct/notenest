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

export const setLocalStorageItem = (note: Note[]) => {
  localStorage.setItem("notes", JSON.stringify(note));
};
