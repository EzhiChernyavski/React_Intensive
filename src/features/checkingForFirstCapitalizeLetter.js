export function checkingForFirstCapitalizeLetter(fieldName, value) {
  return value.charAt(0) !== value.charAt(0).toUpperCase() ?
    `Write your ${fieldName} with a capital letter` : ``;
}