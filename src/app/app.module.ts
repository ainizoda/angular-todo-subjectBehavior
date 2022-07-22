import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormComponent } from './components/form/form.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoService } from './components/todo/todo.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: TodoPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TodoComponent,
    TodoPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
