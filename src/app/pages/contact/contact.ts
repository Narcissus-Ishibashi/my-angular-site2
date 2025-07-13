import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ← ★追加済み
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], // ← ★OK
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;

  // ✅ Routerを受け取るようにする
  constructor(private router: Router) {}

  // ✅ フォーム送信時に thanks ページに遷移
  onSubmit() {
    this.submitted = true;
    console.log(this.formData);

    // 遷移処理を追加
    this.router.navigate(['/thanks']);
  }
}

