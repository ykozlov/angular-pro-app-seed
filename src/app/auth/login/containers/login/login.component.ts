import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'login',
    template: `
    <div>
    <auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Have not account?</a>
        <button type="submit">Login</button>
    </auth-form>
    </div>
    `
})
export class LoginComponent {
    loginUser(form: FormGroup): void {
        console.log('login', form.value);
    }
}