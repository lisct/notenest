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

export const setLocalStorageItem = (notes: Note[]) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
