import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ← 追加！

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ← これ追加！
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

