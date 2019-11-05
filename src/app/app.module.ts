import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerbsComponent } from './herbs/herbs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'herbs', component: HerbsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HerbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
