import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: "login" , component:LoginComponent
  },
  {
    path: "dashboard" , component:DashboardComponent
  },
  {
    path: "nuevo" , component: NuevoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
