import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AUTH_COMPONENT_LIST } from "./components";
import { APPLICATION_GUARD_PROVIDERS } from "./backend/guards";
import { APPLICATION_AUTH_SERVICE_PROVIDERS } from "./backend/services";

import { AUTH_RESOLVER_LIST } from "./backend/resolvers";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbCardModule } from "@nebular/theme";
import { NbAuthModule } from "@nebular/auth";
import { RouterModule } from "@angular/router";


@NgModule( {
    declarations: [
        AUTH_COMPONENT_LIST
    ],
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NbThemeModule.forRoot( { name: 'corporate' } ),
        NbLayoutModule,
        NbSidebarModule,
        NbCardModule,
        NbActionsModule,
        NbAuthModule,
    ],
    providers: [APPLICATION_AUTH_SERVICE_PROVIDERS, APPLICATION_GUARD_PROVIDERS, AUTH_RESOLVER_LIST],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
} )
export class AuthModule { }
