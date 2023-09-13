import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './sharePage/header/header.component';
import { FooterComponent } from './sharePage/footer/footer.component';


const routes: Routes = [
  {
    path :"nav",
    component :HeaderComponent
  },

  {
    path :"footer",
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
