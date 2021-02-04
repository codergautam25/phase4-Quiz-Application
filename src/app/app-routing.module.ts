import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultAndreviewComponent } from './result-andreview/result-andreview.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch : 'full'},
  {path:'home', component:HomeComponent},
  {path:'quiz', component:QuizComponent},
  {path:'result-review', component:ResultAndreviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
