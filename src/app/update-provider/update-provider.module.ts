import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProviderPageRoutingModule } from './update-provider-routing.module';

import { UpdateProviderPage } from './update-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateProviderPageRoutingModule
  ],
  declarations: [UpdateProviderPage]
})
export class UpdateProviderPageModule {}
