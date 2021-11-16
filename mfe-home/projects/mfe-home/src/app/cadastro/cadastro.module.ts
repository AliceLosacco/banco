import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';


@NgModule({
    declarations: [
      CadastroComponent
    ],
    imports: [
        BrowserModule,
        CadastroRoutingModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    providers: []
})
export class CadastroModule { }
