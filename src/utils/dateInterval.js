export function dateInterval(date) {
  const dateUpdate = new Date(date);
  const currentDate = new Date();
  const timeInOneDay = 1000 * 60 * 60 * 24;
  const diffDate = Math.round((dateUpdate - currentDate) / timeInOneDay);

  if (diffDate < 30) {
    return `${diffDate} days ago`;
  }
  return `${dateUpdate.toLocaleDateString("en-US", {
    month: "short",
  })} ${dateUpdate.getDate()}, ${dateUpdate.getFullYear()}`;
}
