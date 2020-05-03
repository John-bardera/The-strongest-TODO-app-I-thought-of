import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptors';

import { ApisModule } from './apis/apis.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './stores';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [AppComponent],
  // Modalとかはここに追加しないといけない
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ApisModule,
    StoreModule.forRoot(reducers),
    ServicesModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
