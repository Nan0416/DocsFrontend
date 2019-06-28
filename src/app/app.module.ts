import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DocsComponent } from './components/docs/docs.component';

import { RouterModule, Route, UrlSegment } from '@angular/router';


const routes: Route[] = [
  { path: "docs", component: DocsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
