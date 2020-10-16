import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreStartPage } from './pre-start.page';

const routes: Routes = [
  {
    path: '',
    component: PreStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreStartPageRoutingModule {}
