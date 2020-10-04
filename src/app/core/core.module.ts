import { ConfigService } from './http/config/config.service';
import { TokenInterceptor } from './http/interceptors/token.interceptor';
import { ApiPrefixInterceptor } from './http/interceptors/api-prefix.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { UserService } from './http/user/user.service';
import { FirebaseService } from './http/firebase/firebase.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    UserService,
    ConfigService,
    FirebaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
