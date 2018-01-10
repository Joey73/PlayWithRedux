import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const appRoutes: Routes = [
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  