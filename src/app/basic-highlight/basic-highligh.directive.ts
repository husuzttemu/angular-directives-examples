import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector:'[appBasicHighlight]' /*attributes style */
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
     this.elementRef.nativeElement.style.backgroundColor = 'green'; /*not a good practice */
   }
}
