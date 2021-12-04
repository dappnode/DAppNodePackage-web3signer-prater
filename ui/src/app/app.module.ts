import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { KeymanagerComponent } from './components/keymanager/keymanager.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HelpComponent } from './components/help/help.component';
import { SignerStatusComponent } from './components/dashboard/components/signer-status/signer-status.component';
import { HttpClientModule } from '@angular/common/http';
import { SignerPubKeysComponent } from './components/dashboard/components/signer-pub-keys/signer-pub-keys.component';

@NgModule({
  declarations: [
    AppComponent,
    KeymanagerComponent,
    DashboardComponent,
    HelpComponent,
    SignerStatusComponent,
    SignerPubKeysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
