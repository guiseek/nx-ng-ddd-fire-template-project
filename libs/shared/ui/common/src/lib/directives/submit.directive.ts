import { AfterViewInit, ContentChild, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[seekSubmit]'
})
export class SubmitDirective implements AfterViewInit {
  @ContentChild('formEl') form;

  constructor(public el: ElementRef) { }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.form);
      console.log(this.el.nativeElement);

    }, 3000)
  }

}
