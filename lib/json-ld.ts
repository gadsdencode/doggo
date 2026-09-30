export function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}
