import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  //srvElement alias para fazer o bind do input

  @Input('srvElement') element: { type: string; name: string; content: string }; // define que element deve conter

  @ViewChild('heading') header: ElementRef; // só pode usar referencias depois de view init

  @ContentChild('paragraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  // obtem o valor antes da mudança
  // chamado depois que um input bind muda
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  //chamado quando o componente é inicializado
  ngOnInit() {
    console.log('ngOnInit called');
  }

  // sempre que há alguma mudança
  // click de botão, response de request, etc
  // cuidado com performance
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  //só é chamado uma vez
  // depois que o ng-content é inicializado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  // chamado depois que há mudança no ng-content
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  // chamado quando a view é iniciada
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('text header: ' + this.header.nativeElement.textContent);
    console.log('paragraph:' + this.paragraph.nativeElement.textContent);
  }

  // chamado quando a view é atualizada
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  // chamado quando o component é destruido
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
