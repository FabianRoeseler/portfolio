import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

    isModalOpen = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}
  
    openModal() {
      this.isModalOpen = true;
      this.document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
  
    closeModal() {
      this.isModalOpen = false;
      this.document.body.style.overflow = 'auto'; // Restore background scroll
    }
  }