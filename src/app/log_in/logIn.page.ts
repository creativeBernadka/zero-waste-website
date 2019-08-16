import { Component } from '@angular/core';
import {AuthService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-logIn',
    templateUrl: 'logIn.page.html',
    styleUrls: ['logIn.page.scss'],
    providers: [AuthService]
})
export class LogInPage {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    login: string;
    password: string;

    verifyCredentials() {
        console.log(this.login, this.password);
        if (this.login && this.password) {
            this.authService.login(this.login, this.password)
                .subscribe(
                    () => {
                        console.log('User is logged in');
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }
}
