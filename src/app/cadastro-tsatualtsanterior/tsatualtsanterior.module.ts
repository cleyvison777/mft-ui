import { CadastroSituacaosilviculturalComponent } from './../cadastro-situacaosilvicultural/cadastro-situacaosilvicultural.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroTsatualtsanteriorComponent } from './cadastro-tsatualtsanterior.component';

@NgModule({
  imports: [
    CommonModule,
    CadastroSituacaosilviculturalComponent
  ],
  exports: [CadastroTsatualtsanteriorComponent],
  declarations: []
})
export class TsatualtsanteriorModule { }
