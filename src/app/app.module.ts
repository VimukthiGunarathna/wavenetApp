import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { SubscriberCardComponent } from './secure/dashboard/subscriber-card/subscriber-card.component';
import { VoicemailCardComponent } from './secure/dashboard/voicemail-card/voicemail-card.component';
import { TopNavComponent } from './secure/shared/top-nav/top-nav.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faShoppingBag, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubscriberCardComponent,
    VoicemailCardComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faShoppingBag, faSortAmountDownAlt, faPlus, faMinus);
  }
}
