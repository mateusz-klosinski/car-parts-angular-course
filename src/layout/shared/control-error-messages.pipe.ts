import { ValidationErrors } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpControlErrorMessages',
})
export class ControlErrorMessagesPipe implements PipeTransform {
  handlerByKey = new Map<
    string,
    (controlLabel: string, errorArg?: any) => string
  >([
    ['required', (controlLabel) => `${controlLabel} field is required!`],
    [
      'min',
      (controlLabel, errorArg) =>
        `${controlLabel} field cannot be less than ${errorArg.min}`,
    ],
  ]);

  transform(
    controlErrors: ValidationErrors | null,
    controlLabel: string
  ): string[] {
    if (!controlErrors) {
      return [];
    }

    const errorKeys = Object.keys(controlErrors);

    return errorKeys.map((key) => {
      const errorArgument = controlErrors[key];
      const handler = this.handlerByKey.get(key);

      if (!handler) {
        throw new Error(`Couldn't find handler for error with key: ${key}`);
      }

      return handler(controlLabel, errorArgument);
    });
  }
}
