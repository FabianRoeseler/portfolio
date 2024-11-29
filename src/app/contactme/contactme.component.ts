import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {

  http = inject(HttpClient);

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

  submitFeedback (){
    document.getElementById("submitFeedback")!.classList.add("fade-in-error");
  setTimeout(() => {
    document.getElementById("submitFeedback")!.classList.remove("fade-in-error");
    }, 4000);
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
    this.sendEmail(this.contactData.name, this.contactData.email, this.contactData.message, this.contactData.checkbox);
    ngForm.reset();
    } else if (!ngForm.valid && ngForm.submitted) {
      this.displaySubmiterror();
      }
    }

    isModalOpen = false;

    constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private httpClient: HttpClient) {}
  
    openModal() {
      this.isModalOpen = true;
      this.document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
  
    closeModal() {
      this.isModalOpen = false;
      this.document.body.style.overflow = 'auto'; // Restore background scroll
    }

    secretKey: string = "xovqvjvv";

    emailForm = this.fb.group({
      name: [""],
      email: [""],
      message: [""],
      checkbox: [true]
    });

    sendEmail(name: String, email: String, message: String, checkbox: boolean) {
      if (!this.emailForm.valid) {
        return;
      } else {
          let url = "https://formspree.io/f/" + this.secretKey;
          const httpOptions = {
            headers: new HttpHeaders({
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
        })
      };
  
      let data = `name=${name}&email=${email}&message=${message}`;
      let errorMessage: string = "";
      this.httpClient.post<any>(url, data, httpOptions).subscribe({
          next: data => {
            this.submitFeedback();
          },
          error: error => {
              errorMessage = error.message;
          }
      })
    }}
  }