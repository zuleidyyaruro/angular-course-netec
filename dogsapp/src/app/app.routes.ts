import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DogTableComponent } from './components/dog-table/dog-table.component';
import { DogsFormComponent } from './components/dogs-form/dogs-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogTableComponent },
  { path: 'add', component: DogsFormComponent },
  { path: '**', redirectTo: '' }
];
