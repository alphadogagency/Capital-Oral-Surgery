// Headings use the homepage's light + medium pairing: the emphasised half is
// wrapped in a <span>. The words never change, only where the weight shifts.
const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const CONNECTIVES =
  /^(from|for|to|with|that|when|after|before|in|without|and|of|on|is|can|may|are|helps?)$/i;

/** Section heading: emphasise the first clause and break before the rest. */
export function splitHeading(text: string, lineBreak = true): string {
  const joiner = lineBreak ? "<br>" : " ";
  const comma = text.indexOf(",");
  if (comma > 8 && comma < text.length - 8) {
    return `<span>${escapeHtml(text.slice(0, comma + 1))}</span>${joiner}${escapeHtml(text.slice(comma + 2))}`;
  }
  const words = text.split(" ");
  if (words.length < 3) return `<span>${escapeHtml(text)}</span>`;
  const middle = words.length / 2;
  let best = -1;
  words.forEach((word, index) => {
    if (
      index > 0 &&
      CONNECTIVES.test(word) &&
      (best < 0 || Math.abs(index - middle) < Math.abs(best - middle))
    ) {
      best = index;
    }
  });
  const cut = best > 0 && Math.abs(best - middle) <= 2 ? best : Math.ceil(middle);
  return `<span>${escapeHtml(words.slice(0, cut).join(" "))}</span>${joiner}${escapeHtml(words.slice(cut).join(" "))}`;
}

/** Page title: light first half, medium second half. */
export function splitTitle(text: string): string {
  const words = text.split(" ");
  if (words.length < 2) return `<span>${escapeHtml(text)}</span>`;
  const cut = Math.max(1, Math.floor(words.length / 2));
  return `${escapeHtml(words.slice(0, cut).join(" "))} <span>${escapeHtml(words.slice(cut).join(" "))}</span>`;
}

export const plainText = (html: string) =>
  html
    .replace(/<br\s*\/?>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
