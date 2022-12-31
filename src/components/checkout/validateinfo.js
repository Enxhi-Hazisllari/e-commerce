import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  
  const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð .'-]+$/u;

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvv = false;

  //Card CVV expiration
  if (values.cardSecurityCode === '' || !values.cardSecurityCode.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  //Card Expiration Verification
  if (values.cardExpiration === '' || !values.cardExpiration.trim()) {
    errors.message = "Credit card expiration date is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit card expiration date is invalid";
  }

  //Card Holder Name Verification
  if (values.cardName === '' || !values.cardName.trim()) {
    errors.message = "Card Holder Name is not complete";
  } else if (creditCard.cardholderName.isValid && regexName.test(values.cardName)) {
    errors.cname = true;
  } else {
    errors.message = "Card Holder Name is invalid";
  }

  //Card Number Verification
  if (values.cardNumber === '' || !values.cardNumber.trim()) {
    errors.message = "Credit card Number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit card Number is invalid";
  }

  
  if (
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Credit Card is valid";
  }

  return errors;
}
