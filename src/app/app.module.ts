import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule ,routers} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModule,Material} from './mat/mat.module';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { FormarrayComponent } from './formarray/formarray.component';
import {ServiceService} from './service.service';
import { GetserviceComponent} from './getservice/getservice.component';
import { ValidatorService } from './validator.service';
import { Formarray2Component } from './formarray2/formarray2.component';
import { Formarray3Component } from './formarray3/formarray3.component';




@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    MyDialogComponent,
    FormarrayComponent,
    routers,
    GetserviceComponent,
    Formarray2Component,
    Formarray3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    
  ],
  entryComponents: [
    MyDialogComponent, MaterialComponent
  ],
  providers: [ServiceService, ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
