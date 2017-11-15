import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MatButtonModule,
         MatSidenavModule,
         MatButtonToggleModule,
         MatCardModule,
         MatCheckboxModule,
         MatIconModule,
         MatToolbarModule,
         MatMenuModule,
         MatStepperModule,
         MatFormFieldModule,
         MatSelectModule,
         MatInputModule,
         MatExpansionModule,
         MatGridListModule,
         MatTooltipModule,
         MatProgressBarModule,
         MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AccountSearchComponent } from './account-search/account-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatStepperModule,
    RouterModule,
    MatInputModule,
    MatGridListModule,
    HttpModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
        {
            component: AccountSearchComponent,
            path: ''
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
