import { Component } from '@angular/core';
import {AuthService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'user.page.html',
    styleUrls: ['user.page.scss'],
    providers: [AuthService]
})
export class UserPage {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    shops = [{
        name: 'Shop 1',
        typeOfPlace: 'sklep'
    }, {
        name: 'Shop 2',
        typeOfPlace: 'punkt naprawczy'
    }, {
        name: 'Shop 3',
        typeOfPlace: 'restauracja'
    }];

    logOut() {
        this.authService.logout();
        console.log('User is logged out');
        this.router.navigateByUrl('home');
    }

}
