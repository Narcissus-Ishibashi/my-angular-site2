import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about'; // About追加！
import { ContactComponent } from './pages/contact/contact'; // ←追加


export const routes: Routes = [
  { path: '', component: HomeComponent },              // TOPページ
  { path: 'about', component: AboutComponent },        // Aboutページ ← カンマ必要！
  { path: 'contact', component: ContactComponent }     // Contactページ
];

