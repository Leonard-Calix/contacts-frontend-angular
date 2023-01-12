import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './componenst/barra-lateral/barra-lateral.component';
import { NavbarComponent } from './componenst/navbar/navbar.component';
import { InicioComponent } from './componenst/inicio/inicio.component';
import { ContadorComponent } from './screens/contador/contador.component';
import { UsersComponent } from './screens/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    NavbarComponent,
    InicioComponent,
    ContadorComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
