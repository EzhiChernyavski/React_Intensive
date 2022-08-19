export function checkingQuantityOfCharacters(value) {
  return value.length > 600 ? `Exceeded the limit of characters in the field` : ``;
}