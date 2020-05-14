import { ListaEspecieService } from './lista-especie/lista-especie.service';
import { UsoespecieService } from './cadastro-usoespecie/usoespecie.service';
import { GrupoEcologicoService } from './cadastro-grupo-ecologico/grupo-ecologico.service';
import { GeneroService } from './cadastro-genero/genero.service';
import { FamiliaService } from './cadastro-familia/familia.service';
import { ArvoreService } from './cadastro-arvore/arvore.service';
import { AppavaliacaoService } from './appavaliacao/appavaliacao.service';
import { AppavaliacaoComponent } from './appavaliacao/appavaliacao.component';
import { AppmonitoramentoComponent } from './appmonitoramento/appmonitoramento.component';
import { AssociarverificadorService } from './associarverificador/associarverificador.service';
import { Modnivel1Service } from './modnivel1/modnivel1.service';

import { UnidadelocalsublocalService } from './unidadelocalsublocal/unidadelocalsublocal.service';
import { CadtipodeverificadorService } from './cadtipodeverificador/cadtipodeverificador.service';
import { CadmaterialService } from './cadmaterial/cadmaterial.service';
import { CadtipodemetodoService } from './cadtipodemetodo/cadtipodemetodo.service';
import { CadfrequenciaService } from './cadfrequencia/cadfrequencia.service';
import { CadempresaService } from './cadempresa/cadempresa.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ToastyModule } from 'ng2-toasty';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {TreeModule} from 'primeng/tree';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { MenuComponent } from './menu/menu.component';
import { CadempresaComponent } from './cadempresa/cadempresa.component';
import { CadtipodeverificadorComponent } from './cadtipodeverificador/cadtipodeverificador.component';
import { CadniveldeavaliacaoComponent } from './cadniveldeavaliacao/cadniveldeavaliacao.component';
import { CadfrequenciaComponent } from './cadfrequencia/cadfrequencia.component';
import { CadtipodemetodoComponent } from './cadtipodemetodo/cadtipodemetodo.component';
import { CadmaterialComponent } from './cadmaterial/cadmaterial.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerificadorMComponent } from './verificador-m/verificador-m.component';
import { NodeService } from 'src/service/nodeservice';
import { UnidadelocalsublocalComponent } from './unidadelocalsublocal/unidadelocalsublocal.component';
import { CadniveldeavaliacaoService } from './cadniveldeavaliacao/cadniveldeavaliacao.service';
import { ErrorHandlerService } from './core/error-handler.service';

import { VerificadorMService } from './verificador-m/verificador-m.service';
import { VerificadorMEditandoComponent } from './verificador-m/verificador-m-editando/verificador-m-editando.component';
import { VerificadorMEditandoService } from './verificador-m/verificador-m-editando/verificador-m-editando.service';
import { VerificadorMAssociarComponent } from './verificador-m/verificador-m-associar/verificador-m-associar.component';
import { VerificadorMAssociarService } from './verificador-m/verificador-m-associar/verificador-m-associar.service';
import { Modlocal1Component } from './modlocal1/modlocal1.component';
import { Modlocal1Service } from './modlocal1/modlocal1.service';
import { Modlocal2Component } from './modlocal2/modlocal2.component';
import { Modlocal2Service } from './modlocal2/modlocal2.service';
import { Modlocal2EditandoComponent } from './modlocal2/modlocal2-editando/modlocal2-editando.component';
import { Modnivel1Component } from './modnivel1/modnivel1.component';
import { Modnivel2Component } from './modnivel2/modnivel2.component';
import { Modnivel3Component } from './modnivel3/modnivel3.component';
import { Modnivel2Service } from './modnivel2/modnivel2.service';
import { Modnivel3Service } from './modnivel3/modnivel3.service';
import { Modnivel4Component } from './modnivel4/modnivel4.component';
import { Modnivel4Service } from './modnivel4/modnivel4.service';
import { ModmonitoramentotemplateComponent } from './modmonitoramentotemplate/modmonitoramentotemplate.component';
import { ModmonitoramentotemplateService } from './modmonitoramentotemplate/modmonitoramentotemplate.service';
import { ModverificadoresdomodeloComponent } from './modverificadoresdomodelo/modverificadoresdomodelo.component';
import { AssociarverificadorComponent } from './associarverificador/associarverificador.component';
import { AppmonitoramentoService } from './appmonitoramento/appmonitoramento.service';
import { TesteComponent } from './teste/teste.component';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MultiSelectModule} from 'primeng/multiselect';
import { MensagemFormularioComponent } from './mensagem-formulario/mensagem-formulario.component';
import { CadastroArvoreComponent } from './cadastro-arvore/cadastro-arvore.component';
import { CadastroAmfComponent } from './cadastro-amf/cadastro-amf.component';
import { AmfService } from './cadastro-amf/amf.service';
import { ListaEspecieComponent } from './lista-especie/lista-especie.component';
import { CadastroFamiliaComponent } from './cadastro-familia/cadastro-familia.component';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { CadastroGrupoEcologicoComponent } from './cadastro-grupo-ecologico/cadastro-grupo-ecologico.component';
import { CadastroCategoriaProtecaoComponent } from './cadastro-categoria-protecao/cadastro-categoria-protecao.component';
import { CadastroUsoespecieComponent } from './cadastro-usoespecie/cadastro-usoespecie.component';



const routes: Routes = [
  { path: 'inicio', component:InicioComponent},
  { path: 'cadempresa', component:CadempresaComponent},
  { path: 'cadempresa/:codigo', component:CadempresaComponent},
  { path: 'cadfrequencia', component:CadfrequenciaComponent},
  { path: 'cadfrequencia/:codigo', component:CadfrequenciaComponent},
  { path: 'cadniveldeavaliacao', component:CadniveldeavaliacaoComponent},
  { path: 'cadniveldeavaliacao/:codigo', component:CadniveldeavaliacaoComponent},
  { path: 'cadtipodemetodo', component:CadtipodemetodoComponent},
  { path: 'cadtipodemetodo/:codigo', component:CadtipodemetodoComponent},
  { path: 'cadtipodeverificador', component:CadtipodeverificadorComponent},
  { path: 'cadtipodeverificador/:codigo', component:CadtipodeverificadorComponent},
  { path: 'cadmaterial', component:CadmaterialComponent},
  { path: 'cadmaterial/:codigo', component:CadmaterialComponent},
  { path: 'verificador_m', component:VerificadorMComponent},
  { path: 'verificador_m/:codigo', component:VerificadorMComponent},
  { path: 'verificador_m/associar', component:VerificadorMAssociarComponent},
  { path: 'unidadelocalsublocal', component:UnidadelocalsublocalComponent},
  { path: 'modlocal1', component:Modlocal1Component},
  { path: 'modlocal1/:codigo', component:Modlocal1Component},
  { path: 'modlocal2', component:Modlocal2Component},
  { path: 'modlocal2/:codigo', component:Modlocal2EditandoComponent},
  { path: 'unidadelocalsublocal', component:UnidadelocalsublocalComponent},
  { path: 'unidadelocalsublocal/:codigo', component:UnidadelocalsublocalComponent},
  { path: 'modnivel1', component:Modnivel1Component},
  { path: 'modnivel1/:codigo', component:Modnivel1Component},
  { path: 'modnivel2', component:Modnivel2Component},
  { path: 'modnivel2/:codigo', component:Modnivel2Component},
  { path: 'modnivel3', component:Modnivel3Component},
  { path: 'modnivel3/:codigo', component:Modnivel3Component},
  { path: 'modnivel4', component:Modnivel4Component},
  { path: 'modnivel4/:codigo', component:Modnivel4Component},
  { path: 'modmonitoramentotemplate', component:ModmonitoramentotemplateComponent},
  { path: 'modmonitoramentotemplate/:codigo', component:ModmonitoramentotemplateComponent},
  { path: 'associarverificador', component:AssociarverificadorComponent},
  { path: 'associarverificador/:codigo', component:AssociarverificadorComponent},
  { path: 'appmonitoramento', component:AppmonitoramentoComponent},
  { path: 'appmonitoramento/:codigo', component:AppmonitoramentoComponent},
  { path: 'appavaliacao', component:AppavaliacaoComponent},
  { path: 'appavaliacao/:codigo', component: AppavaliacaoComponent},
  
  { path: 'cadastro-genero', component: CadastroGeneroComponent},
  { path: 'cadastro-genero/:codigo', component: CadastroGeneroComponent},

  { path: 'cadastro-amf', component: CadastroAmfComponent},
  { path: 'cadastro-amf/:codigo', component: CadastroAmfComponent},

   { path: 'cadastro-familia', component: CadastroFamiliaComponent},
   { path: 'cadastro-familia/:codigo', component: CadastroFamiliaComponent},
  
  { path: 'cadastro-grupo-ecologico', component: CadastroGrupoEcologicoComponent},
  { path: 'cadastro-grupo-ecologico/:codigo', component: CadastroGrupoEcologicoComponent},
   
  { path: 'cadastro-categoria-protecao', component: CadastroCategoriaProtecaoComponent},
  { path: 'cadastro-categoria-protecao/:codigo', component: CadastroCategoriaProtecaoComponent},

  { path: 'cadastro-usoespecie', component: CadastroUsoespecieComponent},
  { path: 'cadastro-usoespecie/:codigo', component: CadastroUsoespecieComponent},
  
  { path: 'lista-especie', component: ListaEspecieComponent},
  { path: 'lista-especie/:codigo', component: ListaEspecieComponent},

  {path: 'cadastro-arvore', component: CadastroArvoreComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadempresaComponent,
    CadtipodeverificadorComponent,
    CadniveldeavaliacaoComponent,
    CadfrequenciaComponent,
    CadtipodemetodoComponent,
    CadmaterialComponent,
    InicioComponent,
    VerificadorMComponent,
    UnidadelocalsublocalComponent,
    VerificadorMEditandoComponent,
    VerificadorMAssociarComponent,
    Modlocal1Component,
    Modlocal2Component,
    Modlocal2EditandoComponent,
    Modnivel1Component,
    Modnivel2Component,
    Modnivel3Component,
    Modnivel4Component,
    ModmonitoramentotemplateComponent,
    ModverificadoresdomodeloComponent,
    AssociarverificadorComponent,
    AppmonitoramentoComponent,
    AppavaliacaoComponent,
    TesteComponent,
    MensagemFormularioComponent,
    CadastroArvoreComponent,
    CadastroAmfComponent,
    ListaEspecieComponent,
     CadastroFamiliaComponent,
    CadastroGeneroComponent,
    CadastroGrupoEcologicoComponent,
    CadastroCategoriaProtecaoComponent,
    CadastroUsoespecieComponent,


  ],
  imports: [
    DialogModule,
    AccordionModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    InputMaskModule,
    FileUploadModule,
    TableModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    TabViewModule,
    TooltipModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    TreeModule,
    CheckboxModule,
    CalendarModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    AppRoutingModule,
    FieldsetModule,
    PanelModule,
    SplitButtonModule,
    MultiSelectModule
  ],
  providers: [
    NodeService,
    CadtipodemetodoService,
    CadfrequenciaService,
    CadempresaService,
    CadmaterialService,
    CadtipodeverificadorService,
    CadniveldeavaliacaoService,
    ConfirmationService,
    VerificadorMService,
    VerificadorMEditandoService,
    VerificadorMAssociarService,
    Modlocal1Service,
    Modlocal2Service,
    UnidadelocalsublocalService,
    Modnivel1Service,
    Modnivel2Service,
    Modnivel3Service,
    Modnivel4Service,
    ModmonitoramentotemplateService,
    AppmonitoramentoService,
    AppavaliacaoService,
    AssociarverificadorService,
    ErrorHandlerService,
    ArvoreService,
    AmfService,
    FamiliaService,
    GeneroService,
    GrupoEcologicoService,
    UsoespecieService,
    ListaEspecieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
