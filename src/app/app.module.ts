import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth.service';
import { NbThemeModule } from '@nebular/theme';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { UserService } from './core/user.service';
import { FormsModule } from '@angular/forms';

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule, NbActionsModule } from '@nebular/theme';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NbAuthService, NbAuthModule, NbTokenService, NbTokenStorage } from "@nebular/auth";

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NbThemeModule.forRoot( { name: 'corporate' } ),
        NbLayoutModule,
        NbSidebarModule,
        NbCardModule,
        NbActionsModule,
        NbAuthModule,
        AngularFireModule.initializeApp( environment.firebase ),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ],
    providers: [NbSidebarService, AuthService, UserService, UserResolver, AuthGuard, { provide: FirestoreSettingsToken, useValue: {} }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
} )
export class AppModule { }
