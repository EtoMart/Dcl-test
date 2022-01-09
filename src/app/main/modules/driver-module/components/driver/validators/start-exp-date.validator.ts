import { FormGroup } from '@angular/forms';

export function startExpDateValidator(
  from: string,
  to: string
): (group: FormGroup) => { [p: string]: boolean } | null {
  return (group: FormGroup): { [key: string]: boolean } => {
    const date1 = new Date(group.controls[from].value).getTime();
    const date2 = new Date(group.controls[to].value).getTime();
    const fullYearsOfExp = (date1 - date2) / (24 * 3600 * 1000 * 365);

    if (fullYearsOfExp < 16) {
      return {
        dates: true,
      };
    }
    return {};
  };
}
