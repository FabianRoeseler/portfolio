import { Component } from '@angular/core';
import { HeroPageComponent } from '../hero-page/hero-page.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactmeComponent } from '../contactme/contactme.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [HeroPageComponent, AboutmeComponent, MyskillsComponent, PortfolioComponent, ContactmeComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
