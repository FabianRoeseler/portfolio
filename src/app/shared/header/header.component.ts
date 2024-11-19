import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isNavigationOpen = false;

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
