import { AbstractControl, ValidationErrors } from '@angular/forms';
export class SignUpValidators {
  static nemogurazmaci(element: AbstractControl): ValidationErrors | null {
    if ((element.value as string).indexOf(' ') >= 0) {
      return { nemogurazmaci: true };
    }
    return null;
  }

  static zauzetostkorisnickogimena(
    element: AbstractControl
  ): Promise<ValidationErrors | null> {
    const imena = ['Dzenis', 'Meris'];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (imena.indexOf(element.value as string) >= 0) {
          resolve({ zauzetostkorisnickogimena: true });
        } else resolve(null);
      }, 3000);
    });
  }
}
