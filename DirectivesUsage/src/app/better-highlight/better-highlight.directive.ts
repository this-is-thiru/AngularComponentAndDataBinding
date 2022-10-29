import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor!:string ;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','red');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','white');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','transparent');
    this.backgroundColor = this.defaultColor
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','black');
  }
  // @HostListener('click') mouseonover(eventData: Event){
  //   // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','red');
  //   this.backgroundColor='yellow';
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'color','white');
  // }
}


