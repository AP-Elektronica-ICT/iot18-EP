import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http'
import { TagServiceProvider } from './providers/tag-service/tag-service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'upload', component: UploadComponent},
  { path: 'login', component: LoginComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [TagServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
