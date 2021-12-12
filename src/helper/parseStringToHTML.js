export default function parseString(string) {
  const parser = new DOMParser();
  const text = parser.parseFromString(string, "text/html");

  return text.body.innerText;
}
