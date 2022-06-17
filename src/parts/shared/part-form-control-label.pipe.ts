import { Pipe, PipeTransform } from '@angular/core';
import { PartFormControls } from './part-form-controls.enum';

@Pipe({
  name: 'cpPartFormControlLabel',
})
export class PartFormControlLabelPipe implements PipeTransform {
  private readonly labelByControl = new Map<PartFormControls, string>([
    [PartFormControls.Name, 'Name'],
    [PartFormControls.Price, 'Price'],
  ]);
  transform(control: PartFormControls): string {
    const label = this.labelByControl.get(control);

    if (!label) {
      throw new Error(`No label defined for control: ${control}`);
    }

    return label;
  }
}
