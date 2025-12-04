export function formatNotificationTimestamp(ts: string): string {
  const d = new Date(ts);

  if (Number.isNaN(d.getTime())) {
    return ts;
  }

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();

  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
}
