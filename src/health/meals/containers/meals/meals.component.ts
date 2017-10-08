import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from 'store';

import { MealsService, Meal } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meals',
  styleUrls: ['meals.component.scss'],
  template: `
  <div>
    {{meals$ | async | json}}
  </div>
  `
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(
    private mealsService: MealsService,
    private store: Store
  ) { }

  ngOnInit() {
    this.subscription = this.mealsService.meals.subscribe();
    this.meals$ = this.store.select<Meal[]>('meals');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}