import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ApisModule } from '@/apis/apis.module';
import { ComponentsModule } from '@/components/components.module';
import { TaskDetailComponent } from '@/components/task-detail/task-detail.component';
import { ServicesModule } from '@/services/services.module';

import { httpInterceptorProviders } from '../http-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './stores';

@NgModule({
  declarations: [AppComponent],
  // Modalとかはここに追加しないといけない
  entryComponents: [
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ApisModule,
    StoreModule.forRoot(reducers),
    ServicesModule,
    ComponentsModule,
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
