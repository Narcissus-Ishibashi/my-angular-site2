// app.routes.ts
import { Routes } from '@angular/router'; // ✅ この行が必要！

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'thanks',
    loadComponent: () =>
      import('./pages/thanks/thanks.component').then((m) => m.ThanksComponent),
  },
];

