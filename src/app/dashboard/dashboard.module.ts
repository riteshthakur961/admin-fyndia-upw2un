import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { ClientComponent} from '../client/client.component';
const dashRoutes: Routes = [
     { path: '', component: HomeComponent, 
     children: [
       { path: 'overview', component: HomeComponent},
      { path: 'client', component: ClientComponent}
     ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(dashRoutes)
  ],
  declarations: [HomeComponent, ClientComponent]
})
export class DashboardModule { }