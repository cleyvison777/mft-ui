import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-formulario',
  template: `<div  *ngIf="temErro()" class="invalid-feedback" style="color: brown;">{{ text }}</div>
  `,
  styles: []
})
export class MensagemFormularioComponent {

@Input() error: string;
@Input() control: FormControl;
@Input() text: string;

temErro(): boolean {
return this.control.hasError(this.error) && this.control.touched;
     }
}
