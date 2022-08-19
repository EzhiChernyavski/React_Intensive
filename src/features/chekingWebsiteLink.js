export function checkingWebsiteLink (value) {
  const patternUrl = 'https://';
  let arr = [...value];
  let head = false;

  if (arr.length >= 8) {
    head = arr.slice(0, 8).join('');
    return head !== patternUrl ? `The URL must start with https://` : ``
  }
}