import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent

    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    providers: []
})
export class HomeModule { }
