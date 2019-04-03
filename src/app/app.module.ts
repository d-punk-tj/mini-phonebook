import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contact/contact.component';
import { AddContactComponent } from './shared/components/add-contact/add-contact.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MaterialModule } from './shared/components/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent],
})
export class AppModule { }
