import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetayComponent } from './pages/detay/detay.component';
import { UptadeComponent } from './pages/uptade/uptade.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [

  {path:'',component:UserComponent},
  {path:'usersdetay/:id',component:DetayComponent},
  {path:'uptade/:id',component:UptadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
