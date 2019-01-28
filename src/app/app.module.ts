import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NbThemeModule } from '@nebular/theme';

import { FormsModule } from '@angular/forms';

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule, NbActionsModule } from '@nebular/theme';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NbAuthService, NbAuthModule, NbTokenService, NbTokenStorage } from "@nebular/auth";
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./config/app-routing.module";
import { AppComponent } from "./app.component";

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        AngularFireModule.initializeApp( environment.firebase ),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    providers: [NbSidebarService, { provide: FirestoreSettingsToken, useValue: {} }],
    bootstrap: [AppComponent]
} )
export class AppModule { }
