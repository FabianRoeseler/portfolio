import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  isModalOpen = false;

  toggleMenu(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) {

    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");

  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
  }

