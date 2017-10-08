import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AuthGuard } from '../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: 'meals', 
    loadChildren:'./meals/meals.module#MealsModule', 
    canActivate: [AuthGuard]
  },
  {
    path: 'workouts', 
    loadChildren:'./workouts/workouts.module#WorkoutsModule', 
    canActivate: [AuthGuard]
  },
  {
    path: 'schedule', 
    loadChildren:'./schedule/schedule.module#ScheduleModule', 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class HealthModule {
}
