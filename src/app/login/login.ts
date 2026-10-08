import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, email, minLength, submit } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
})
export class Login {
  private router = inject(Router);

  model = signal({ email: '', password: '', remember: false });

  loginForm = form(this.model, (path) => {
    required(path.email, { message: 'Email is required' });
    email(path.email, { message: 'Enter a valid email address' });

    required(path.password, { message: 'Password is required' });
    minLength(path.password, 8, { message: 'Password must be at least 8 characters' });
  });

  async onSubmit(event: Event) {
    event.preventDefault();
    await submit(this.loginForm, async () => {
      console.log('Logging in with', this.model());
      this.router.navigate(['/']);
    });
  }
}