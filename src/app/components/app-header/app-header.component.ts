import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: ['app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="app-header">
    <div class="wrapper">
      <img src="/img/logo.svg">
      <div class="app-header__user-info" *ngIf="user?.authenticated">
        <span (click)="logoutUser()"></span>
      </div>
    </div>
  </div>
  `
})

export class AppHeaderComponent {

  @Input() user: User;

  @Output() logout = new EventEmitter<any>();

  logoutUser(): void {
    this.logout.emit();
  }
}
