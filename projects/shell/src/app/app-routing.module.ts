import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'login',
  loadChildren: () =>
  loadRemoteModule({
  type: 'module',
  remoteEntry: 'http://localhost:4000/remoteEntry.js',
  exposedModule: '.LoginModule',
  }).then((m) => m.LoginModule),
  },
  {
    path:'login/register',
    loadChildren:()=>
    loadRemoteModule({
      type:'module',
      remoteEntry:'http://localhost:4000/remoteEntry.js',
      exposedModule:'.RegisterModule',
    }).then((m)=>m.RegisterModule)
  },
  {
    path:'blog',
    loadChildren:()=>
    loadRemoteModule({
      type:'module',
      remoteEntry:'http://localhost:4001/remoteEntry.js',
      exposedModule:'.BlogModule',
    }).then((m)=>m.BlogModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
