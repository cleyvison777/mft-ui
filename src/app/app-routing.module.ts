import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FieldsetModule} from 'primeng/fieldset';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FieldsetModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
