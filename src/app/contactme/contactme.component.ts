import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
    ngForm.reset();
    document.getElementById("submiterror")!.style.display = "none";
    } else if (!ngForm.valid && ngForm.submitted) {
      console.log("invalid form"); 
      document.getElementById("submiterror")!.style.display = "block";
    }
  }
  
}