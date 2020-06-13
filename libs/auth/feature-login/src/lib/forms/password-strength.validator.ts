import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordStrengthValidator = function ({
  value = ''
}: AbstractControl): ValidationErrors | null {

  if (!value) return null;

  const upperCase = /[A-Z]+/g;
  if (upperCase.test(value) === false) {
    return { passwordStrength: `Use letras maiusculas` };
  }

  const lowerCase = /[a-z]+/g;
  if (lowerCase.test(value) === false) {
    return { passwordStrength: `Use letras minusculas` };
  }


  const number = /[0-9]+/g;
  if (number.test(value) === false) {
    return { passwordStrength: `Use números` };
  }

  const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (special.test(value) === false) {
    return { passwordStrength: `Use caracteres especiais` };
  }
  return null;
}