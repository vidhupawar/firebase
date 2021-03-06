import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService, NB_AUTH_OPTIONS, nbAuthCreateToken, NbAuthJWTToken, NbAuthToken } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../backend/services";

@Component( {
    selector: 'page-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
} )
export class LoginComponent {

    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(
        public authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group( {
            email: ['', Validators.required],
            password: ['', Validators.required]
        } );
    }

    tryGoogleLogin() {
        this.authService.doGoogleLogin().then( res => {
            this.router.navigate( ['/user'] );
        } )
    }

    tryLogin( value ) {
        this.authService.doLogin( value ).then( res => {
            this.router.navigate( ['/user'] );
        }, err => {
            console.log( err );
            this.errorMessage = err.message;
        } )
    }
}