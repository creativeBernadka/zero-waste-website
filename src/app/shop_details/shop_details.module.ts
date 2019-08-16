import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShopDetailsComponent } from './shop_details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [ShopDetailsComponent],
    exports: [ShopDetailsComponent]
})
export class ShopDetailsModule {}
