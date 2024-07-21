import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.username.trim()) {
      localStorage.setItem('username', JSON.stringify(this.username));
      this.router.navigateByUrl('/tasks');
    }
  }
}
