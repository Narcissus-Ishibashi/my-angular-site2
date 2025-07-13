import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ← ★これを追加！

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], // ← ★ここも追加！
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

  onSubmit() {
    this.submitted = true;
    console.log(this.formData);
  }
}
