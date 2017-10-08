import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from 'store';

import { MealsService, Meal } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  template: `
  <div class="meal">
  I'm meal
   </div> 
  `
})
export class MealComponent {
}