import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {ContributionGraphService} from "./services/contribution-graph.service";
import {NgApexchartsModule} from "ng-apexcharts";
import { HeatmapComponent } from './templates/heatmap/heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    HttpClientInMemoryWebApiModule.forRoot(ContributionGraphService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
