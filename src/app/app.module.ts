import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContributionGraphComponent} from './templates/contribution-graph/contribution-graph.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {ContributionGraphService} from "./services/contribution-graph.service";

@NgModule({
  declarations: [
    AppComponent,
    ContributionGraphComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(ContributionGraphService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
