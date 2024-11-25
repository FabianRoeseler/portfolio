import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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

  http = Inject(HttpClient);

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

/*   onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
    ngForm.reset();
    } else if (!ngForm.valid && ngForm.submitted) {
      console.log("invalid form"); 
      this.displaySubmiterror();
      }
    } */

  post = {
    endPoint: 'https://www.fabian-roeseler.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {

      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {

            ngForm.reset();
          },
          /* error: (error: any) => {
            console.error(error);
            this.displaySubmiterror();
          }, */
          complete: () => console.info('send post complete'),
        });
        console.log(this.contactData);
    ngForm.reset();
    }
    else if (!ngForm.valid && ngForm.submitted) {
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