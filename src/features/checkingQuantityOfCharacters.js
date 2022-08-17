export function checkingQuantityOfCharacters(value) {
  let textError = ``;
  return value.length > 600 ? textError = `Exceeded the limit of characters in the field` : textError;
}