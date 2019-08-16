import { Component } from '@angular/core';

@Component({
    selector: 'shop-details',
    templateUrl: 'shop_details.page.html',
    styleUrls: ['shop_details.page.scss'],
})
export class ShopDetailsComponent {

    constructor() {}

    daysOfWeek = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
    name: string;
    type: string;
    description: string;
    phoneNumber: string;
    email: string;
}
