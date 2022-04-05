import { AfterViewInit, Directive, ElementRef, Input, OnInit,  } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective  implements OnInit  {

  htmlElement: ElementRef<HTMLElement>;
  private _color : string = 'red';
  private _mensaje : string = 'Obligatorio';

  @Input() set color( valor: string){
    console.log('Valor del color', valor);
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }

  // @Input() mensaje: string = 'Este campo es necesario';
@Input() set mensaje(valor: string){
  this.htmlElement.nativeElement.innerText = valor;
  this._mensaje = valor;
}

@Input() set valido(valor: boolean){
  if( valor ) {
    this.htmlElement.nativeElement.classList.add('hidden');
  } else {
    this.htmlElement.nativeElement.classList.remove('hidden')
  }

}

  constructor( private el: ElementRef<HTMLElement> ) {

    console.log('Constructor Directives: Primero');
    console.log(el);

    this.htmlElement = el;

   }




  ngOnInit(): void {
    console.log('ngOnInit directives: Segundo');

    this.setColor();
    this.setMensaje();
    this.setEstilo();

  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color =  this._color;
  }

  setMensaje(): void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
