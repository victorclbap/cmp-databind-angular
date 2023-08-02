import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    bluePrintName: string;
    bluePrintContent: string;
  }>();

  // {static:true} se plane acessar o elemento selecionado no ngoninit
  // {static:falso} se plane acessar o elemento selecionado em outro lugar

  // ElementRef -> referência de um elemento html

  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  // serverNameInput é uma referenca a um elemento html
  // portanto o tipo é HTMLInputElement

  onAddServer(serverNameInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      bluePrintName: serverNameInput.value,
      bluePrintContent: this.serverContentInput.nativeElement.value,
    });
  }
}
