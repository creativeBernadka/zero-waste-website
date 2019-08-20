import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    baseUrl = 'https://zero-waste-database.herokuapp.com';

    login(username: string, password: string ) {
        return this.http.post(this.baseUrl + '/auth', {username, password})
            .pipe(
                tap(
                    res => {
                        this.setSession(res);
                        console.log('RESPONSE', res);
                    },
                    error => console.log(error)
                )
            );
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
