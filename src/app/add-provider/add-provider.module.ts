import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProviderPageRoutingModule } from './add-provider-routing.module';

import { AddProviderPage } from './add-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProviderPageRoutingModule
  ],
  declarations: [AddProviderPage]
})
export class AddProviderPageModule {}
