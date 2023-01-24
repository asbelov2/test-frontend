import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PriceSectionComponent } from './components/price-section/price-section.component';
import { CTASectionComponent } from './components/cta-section/cta-section.component';
import { RegistrationSectionComponent } from './components/registration-section/registration-section.component';
import { QuoteSectionComponent } from './components/quote-section/quote-section.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PriceSectionComponent,
    CTASectionComponent,
    RegistrationSectionComponent,
    QuoteSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
