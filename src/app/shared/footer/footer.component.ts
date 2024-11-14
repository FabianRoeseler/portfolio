import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
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
