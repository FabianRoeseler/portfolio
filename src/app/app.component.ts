import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactmeComponent } from './contactme/contactme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroPageComponent, FooterComponent, AboutmeComponent, MyskillsComponent, PortfolioComponent, ContactmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfoliopage';
}
