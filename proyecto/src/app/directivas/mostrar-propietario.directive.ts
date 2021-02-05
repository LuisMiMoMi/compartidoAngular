import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMostrarPropietario]'
})
export class MostrarPropietarioDirective {

  @Input() disp!: any;

  constructor(private element: ElementRef, private render: Renderer2) { }
  
  @HostListener("mouseenter")
  dentro() {
    this.render.setStyle(this.disp, "display", "");
  }

  @HostListener("mouseleave") 
  fuera() {
    let prop = this.element.nativeElement.querySelector(".disp");
    this.render.setStyle(this.disp, "display", "none");
  }

}
