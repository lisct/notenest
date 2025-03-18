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
