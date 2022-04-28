import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivesNgifComponent } from './diretives-ngif/diretives-ngif.component';
import { DireitivesNgForComponent } from './direitives-ng-for/direitives-ng-for.component';
import { DireitivesNgStyleComponent } from './direitives-ng-style/direitives-ng-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ParentBindingComponent } from './parent-binding/parent-binding.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    DiretivesNgifComponent,
    DireitivesNgForComponent,
    DireitivesNgStyleComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ParentBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
