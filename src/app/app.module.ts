import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SnehatableComponent } from './components/snehatable/snehatable.component';

import { MatTableModule} from '@angular/material';
import { HttpClientModule} from '@angular/common/http';

import { SnehaService } from './services/sneha.service';
@NgModule({
  declarations: [
    AppComponent,
    SnehatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [SnehaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
