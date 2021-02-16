import { componentFactoryName } from '@angular/compiler';

import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'})
export class BodyComponent {

    frase = {
       autor: 'Yo',
       texto: 'Este mensaje aparece y desaparece'};

    mostrar = true;

    letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

}
