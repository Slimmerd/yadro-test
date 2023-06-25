import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiDropdownModule,
  TuiLinkModule,
  TuiRootModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { DateComponent } from './components/date/date.component';
import { TitleComponent } from './components/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CurrencyComponent,
    DateComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Taiga UI
    BrowserAnimationsModule,
    TuiRootModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiDropdownModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiDataListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
