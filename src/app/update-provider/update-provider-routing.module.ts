import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProviderPage } from './update-provider.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProviderPageRoutingModule {}
