import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QueueComponent } from "./queue/queue.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/queue', pathMatch: 'full' },
  { path: 'queue', component: QueueComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
