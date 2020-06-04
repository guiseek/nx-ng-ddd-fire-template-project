import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePtExtra from '@angular/common/locales/extra/br';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { AppComponent } from './app.component';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth', 'login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['produtos']);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // AngularFireAuthGuardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@dekao/catalog/shell').then(
              (module) => module.CatalogShellModule
            ),
        },
        {
          path: 'auth',
          // canActivate: [AngularFireAuthGuard],
          // data: {
          //   authGuardPipe: redirectLoggedInToItems
          // },
          loadChildren: () =>
            import('@dekao/auth/shell').then(
              (module) => module.AuthShellModule
            ),
        },
      ],
      { initialNavigation: true }
    ),
    // CatalogFeatureBrowseProductsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
