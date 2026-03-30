export function toIsoDate(date: string | Date): string {
  return new Date(date).toISOString().slice(0, 10);
}
