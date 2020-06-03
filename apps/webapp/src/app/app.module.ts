import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDomainModule } from '@dekao/auth/domain';
import { AuthFeatureAccountModule } from '@dekao/auth/feature-account';
import { AuthFeatureLoginModule } from '@dekao/auth/feature-login';
import { environment } from '@env/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthFeatureLoginModule,
    AuthDomainModule,
    BrowserAnimationsModule,
    AuthFeatureAccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
