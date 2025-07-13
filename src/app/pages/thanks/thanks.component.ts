import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-thanks',
  templateUrl: './thanks.html',
  styleUrls: ['./thanks.scss'],
})
export class ThanksComponent {} // ← ✅ この名前が export されてるか確認！
