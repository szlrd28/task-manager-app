import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/create', component: TaskCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

export const appConfig = {
  providers: [provideRouter(routes)]
};

