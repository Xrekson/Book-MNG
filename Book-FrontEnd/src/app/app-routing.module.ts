import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'display', pathMatch:'full'},
  { path: 'add', component: AddComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }