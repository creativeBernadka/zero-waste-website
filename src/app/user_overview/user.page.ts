import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'user.page.html',
    styleUrls: ['user.page.scss'],
})
export class UserPage {

    constructor() {}

    shops = [{
        name: 'Shop 1'
    }, {
        name: 'Shop 2'
    }, {
        name: 'Shop 3'
    }];

}
