import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { Test1Component } from './test1/test1.component';
import { Test11Component } from './test1/test11/test11.component';
import { Test2Component } from './test2/test2.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test11Component,
    Test2Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
