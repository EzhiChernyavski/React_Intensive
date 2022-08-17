export function checkingForNumberOfPhoneFormat(value) {

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  let phoneFormatted = ``;


  if (phoneNumberLength === 0){
    phoneFormatted = ``
  } else if (phoneNumberLength < 2) {
    phoneFormatted = `+${phoneNumber}`;
  } else if (phoneNumberLength < 6) {
    phoneFormatted = `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1)}`
  } else if (phoneNumberLength < 10) {
    phoneFormatted = `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5)}`
  } else if (phoneNumberLength < 12) {
    phoneFormatted = `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5, 9)}-${phoneNumber.slice(9)}`
  }

  return phoneFormatted;
}