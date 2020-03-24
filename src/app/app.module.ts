import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainGallaryAppComponent } from "./main-gallary-app/main-gallary-app.component";
import { MoviesGalleryComponent } from "./movies-gallery/movies-gallery.component";
import { FavoriteListComponent } from "./favorite-list/favorite-list.component";
import { MovieModalComponent } from "./movie-modal/movie-modal.component";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { OutputArrayPipe } from "./pipe/output-array.pipe";
import { RegiterEditComponent } from './regiter-edit/regiter-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGallaryAppComponent,
    MoviesGalleryComponent,
    FavoriteListComponent,
    MovieModalComponent,
    MovieItemComponent,
    OutputArrayPipe,
    RegiterEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
