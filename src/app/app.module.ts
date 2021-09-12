import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoChartComponent } from './components/todo-chart/todo-chart.component';
import { TodoService } from './service/todo.service';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoChartComponent,
    AboutComponent,
    PageNotFoundComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'home', component: TodoChartComponent },
      {path: 'contact', component: ContactComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: '**', component: PageNotFoundComponent},
    ]),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
