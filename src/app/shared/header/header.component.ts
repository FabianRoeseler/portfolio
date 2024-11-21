import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('hamMenu') hamMenu?: ElementRef;

  isModalOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

    ngAfterViewInit() {
      this.hamMenu?.nativeElement.addEventListener('load', () => {
        this.hamMenu?.nativeElement.classList.toggle('active');
      });
  }

  openModal() {
    this.isModalOpen = true;
    this.document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  closeModal() {
    this.isModalOpen = false;
    this.document.body.style.overflow = 'auto'; // Restore background scroll
    this.hamMenu?.nativeElement.classList.toggle('active');
  }
  }

