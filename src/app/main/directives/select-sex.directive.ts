import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appSelectSex]'
})
export class SelectSexDirective {

  constructor(private el: ElementRef) { }

  @Output() childEvent = new EventEmitter();

  @HostListener('blur') onBlur(): void {
    const lastWordOfPatronymic = this.el.nativeElement.value.slice(-1);
    const currentSex = (lastWordOfPatronymic === 'а') ? 'female' : 'male';
    this.childEvent.emit(currentSex);
  }
}
