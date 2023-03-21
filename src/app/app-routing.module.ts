import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home' ,pathMatch:'full'},
  { path: 'home', component: PageHomeComponent },
  { path: 'sobre', component: PageSobreComponent },
  { path: 'contato', component: PageContatoComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
