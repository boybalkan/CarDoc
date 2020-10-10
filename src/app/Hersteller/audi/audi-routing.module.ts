import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiPage } from './audi.page';

const routes: Routes = [
  {
    path: '',
    component: AudiPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiPageRoutingModule {}
