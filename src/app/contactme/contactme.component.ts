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

  displaySubmiterror (){
    document.getElementById("submiterrorcontainer")!.classList.add("fade-in-error");
  setTimeout(() => {
    document.getElementById("submiterrorcontainer")!.classList.remove("fade-in-error");
    }, 4000);
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
    ngForm.reset();
    } else if (!ngForm.valid && ngForm.submitted) {
      console.log("invalid form"); 
      this.displaySubmiterror();
      }
    }
  }