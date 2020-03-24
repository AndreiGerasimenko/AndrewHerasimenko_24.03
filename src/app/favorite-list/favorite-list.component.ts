import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MovieModalComponent } from "../movie-modal/movie-modal.component";
import { GetMoviesService } from "../services/get-movies.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-favorite-list",
  templateUrl: "./favorite-list.component.html",
  styleUrls: ["./favorite-list.component.scss"]
})
export class FavoriteListComponent implements OnInit {
  @Input() favouriteList: any[] = [];
  @Output() deleteItem = new EventEmitter<number>();
  constructor(
    private modalService: NgbModal,
    private getFilmSeevice: GetMoviesService
  ) {}

  ngOnInit(): void {}

  onCrossClick($event, id) {
    this.deleteItem.emit(id);
    $event.stopPropagation();
  }

  open(id) {
    this.getFilmSeevice
      .getMovieById(id)
      .pipe(
        map(data => {
          return { ...data, favorite: true };
        })
      )
      .subscribe(data => {
        const modalRef = this.modalService.open(MovieModalComponent, {
          size: "lg",
          centered: true
        });
        modalRef.componentInstance.movie = data;
      });
  }
}
