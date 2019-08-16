import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserPage } from './user.page';
import {ShopDetailsModule} from '../shop_details/shop_details.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ShopDetailsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserPage
            }
        ])
    ],
    declarations: [UserPage]
})
export class UserPageModule {}
