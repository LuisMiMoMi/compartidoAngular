import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appForCarga]'
})
export class ForCargaDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  elem: Array<number> = [];

  @Input()
  set appForCargaOf(lista: Array<number>) {
    this.elem = lista;
    let i = 0;
    this.elem.forEach( p => {
      setTimeout(()=>{
        this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: p, index: i})
        i++;
      }, Math.floor(Math.random()*5000))
    });
  }
}
