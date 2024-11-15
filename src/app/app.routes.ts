import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { NavigationComponent } from './shared/navigation/navigation.component';


export const routes: Routes = [

  { path: '', component: MaincontentComponent },
  { path: 'navigation', component: NavigationComponent },

];
