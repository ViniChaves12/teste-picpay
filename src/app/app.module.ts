import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MeusPagamentosComponent } from './meus-pagamentos/meus-pagamentos.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    MeusPagamentosComponent,
   ],
  imports: [
    BrowserModule,
    MatInputModule,
  ],

  exports:[
    LoginComponent,
    MeusPagamentosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
