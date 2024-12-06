import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent /* implements AfterViewInit */ {

/*   @ViewChild('hamMenu') hamMenu?: ElementRef;

  isModalOpen = false; */

  isModalOpen = false;

  toggleMenu(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) {

    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");

  }

/* ngAfterViewInit() {
      this.hamMenu?.nativeElement.addEventListener('load', () => {
        this.hamMenu?.nativeElement.classList.toggle('active');
      });
  } */

/*   openModal() {
    this.isModalOpen = true;
    this.document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  closeModal() {
    this.isModalOpen = false;
    this.document.body.style.overflow = 'auto'; // Restore background scroll
    this.hamMenu?.nativeElement.classList.toggle('active');
  } */

  useLanguage(language: string): void {
    this.translate.use(language);
}
  }

