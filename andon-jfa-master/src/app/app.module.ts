import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMetaComponent } from './shared/dialog-meta/dialog-meta.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DECIMAL_FORMAT_DEFAULT } from 'src/decimal-format.provider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PausaComponent } from './pages/pausa/pausa.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogPauseComponent } from './shared/dialog-pause/dialog-pause.component';
import { DialogControleRealizadoComponent } from './shared/dialog-controle-realizado/dialog-controle-realizado.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogMetaComponent,
    HomeComponent,
    PausaComponent,
    DialogPauseComponent,
    DialogControleRealizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [DECIMAL_FORMAT_DEFAULT ],
  bootstrap: [AppComponent]
})
export class AppModule { }
