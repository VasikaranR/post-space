import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login/blog',
    loadChildren:()=>
    import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path:'comment',
    loadChildren:()=>
    import('./comment/comment.module').then(m=>m.CommentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
