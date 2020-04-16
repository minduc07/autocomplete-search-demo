import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { componentsList } from './components.constant';

import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent,
    children: componentsList,
  },
  {
    path: '**',
    redirectTo: '/components',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }