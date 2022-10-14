import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { SigninComponent } from './home/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SigupComponent } from './home/sigup/sigup.component';
import { HomeComponent } from './home/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './core/auth/request-interceptor.service';


@NgModule({
  declarations: [	
    AppComponent,
    SigninComponent,
    SigupComponent,
    HeaderComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
