import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldSearchComponent } from './field-search/field-search.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FieldDetailComponent } from './field-detail/field-detail.component'
import { EntitiesComponent } from './entities/entities.component'

const routes: Routes= [
  {path:'', redirectTo: '/navbar',pathMatch:'full'},
  {path:'fieldSearch',component:FieldSearchComponent},
  {path: 'navbar', component: NavbarComponent},
  {path:'fieldDetail/:id', component:FieldDetailComponent},
  {path:'entities', component: EntitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
