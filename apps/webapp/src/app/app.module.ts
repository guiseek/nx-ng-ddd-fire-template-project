import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePtExtra from '@angular/common/locales/extra/br';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: 'auth',
    //     loadChildren: () =>
    //       import('@seek/auth/shell').then((module) => module.AuthShellModule),
    //   },
    //   {
    //     path: 'catalog',
    //     loadChildren: () =>
    //       import('@seek/catalog/shell').then(
    //         (module) => module.CatalogShellModule
    //       ),
    //   },
    //   {
    //     path: '',
    //     loadChildren: () =>
    //       import('@seek/customer/feature-main').then(
    //         (module) => module.CustomerFeatureMainModule
    //       ),
    //   },
    //   {
    //     path: 'dashboard-shell',
    //     loadChildren: () =>
    //       import('@seek/dashboard/shell').then(
    //         (module) => module.DashboardShellModule
    //       ),
    //   },
    // ]),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
