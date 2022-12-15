import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService  as AuthGuard} from 'projects/authguard.service';

const routes: Routes = [
  { path: 'login', 
  loadChildren: () => 
  import('./login/login.module').then(m => m.LoginModule),
  canActivate:[AuthGuard]
  },
  {
    path:'login/register',
    loadChildren:() => 
    import('./register/register.module').then(m =>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
