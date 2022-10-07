export default function createSlug(string, maxLength = 30) {
  return (
    string
      // - replace spaces with dashes,
      .replace(/\s+/g, "-")
      // - lowercase,
      .toLowerCase()
      // max 30 chars,
      .slice(0, maxLength)
      // - remove special characters
      .replace(/[^a-z0-9-]/g, "")
      // - remove unnecessary dashes at the end
      .replace(/-+$/, "") +
    // DASH
    "-" +
    // - then add date as YY - mm - dd.
    new Date().toISOString().slice(2, 10)
  );
}
