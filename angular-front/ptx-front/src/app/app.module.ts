import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeHubComponent } from './home/components/home-hub/home-hub.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DropdownBasicComponent } from './shared/components/dropdown-basic/dropdown-basic.component';
import { WeatherCardComponent } from './home/components/weather-card/weather-card.component';
import { RoundNumberPipe } from './shared/services/round-number.pipe';
import { CurrencyCardComponent } from './home/components/currency-card/currency-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionsContainerComponent } from './home/components/positions-container/positions-container/positions-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHubComponent,
    DropdownBasicComponent,
    WeatherCardComponent,
    RoundNumberPipe,
    CurrencyCardComponent,
    PositionsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule, 
    MatSelectModule,
    NgFor, 
    MatInputModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
