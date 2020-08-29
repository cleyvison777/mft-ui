import { TsatualtsanteriorService } from './../cadastro-tsatualtsanterior/tsatualtsanterior.service';
import { CadastroSituacaosilviculturalComponent } from './cadastro-situacaosilvicultural.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    TsatualtsanteriorService,
    CommonModule
  ],
  declarations: [TsatualtsanteriorService],
  exports: [CadastroSituacaosilviculturalComponent]
})
export class SituacaoModule { }
