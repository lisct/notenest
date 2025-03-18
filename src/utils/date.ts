export const formattedDate = (date: string) => {
  const convertedDate = new Date(date);

  return convertedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
