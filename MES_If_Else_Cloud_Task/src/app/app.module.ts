import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FirstStaticColumnComponent } from './first-static-column/first-static-column.component';
import { TotalBalanceCardComponent } from './total-balance-card/total-balance-card.component';
import { StatisticsCardsAndGraphSectionComponent } from './statistics-cards-and-graph-section/statistics-cards-and-graph-section.component';
import { TranscationHistoryGridComponent } from './transcation-history-grid/transcation-history-grid.component';
import { NameInitialsPipe } from './pipe/name-initials.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    FirstStaticColumnComponent,
    TotalBalanceCardComponent,
    StatisticsCardsAndGraphSectionComponent,
    TranscationHistoryGridComponent,
    NameInitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
