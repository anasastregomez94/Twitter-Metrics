import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SanitizeUrlResourcePipe } from './pipes/sanitize-url-resource.pipe';
import { FormsModule } from '@angular/forms';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SanitizeUrlResourcePipe,
    CardsViewComponent,
    NavbarComponent,
    MapComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    FirstViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
