import { MaincontentComponent } from './maincontent/maincontent.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { Routes } from '@angular/router';


  export const routes: Routes = [
    { path: '', component: MaincontentComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'aboutme', component: MaincontentComponent },
  ];

