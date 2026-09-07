export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const secondsAgo = Math.floor(timeDifference / 1000);

  let formattedDate = "";

  if (daysAgo >= 365) {
    formattedDate = `${Math.floor(daysAgo / 365)} year${Math.floor(daysAgo / 365) === 1 ? "" : "s"} ago`;
  } else if (daysAgo >= 30) {
    formattedDate = `${Math.floor(daysAgo / 30)} month${Math.floor(daysAgo / 30) === 1 ? "" : "s"} ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  } else if (hoursAgo > 0) {
    formattedDate = `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else if (minutesAgo > 0) {
    formattedDate = `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  } else {
    formattedDate = "Just now";
  }

  const fullDate = targetDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
