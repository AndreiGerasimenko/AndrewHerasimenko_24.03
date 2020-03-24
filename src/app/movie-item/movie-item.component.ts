import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MovieModalComponent } from "../movie-modal/movie-modal.component";
import { LocalStorageService } from "../services/local-storage.service";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"]
})
export class MovieItemComponent implements OnInit {
  @Input() movieObj: any;
  @Input() viewType: string = "grid";
  constructor(
    private modalService: NgbModal,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  onRatingChange($event) {
    this.movieObj.favorite = !!$event;
    if (!!$event) {
      this.localStorageService.addMovieToSist(this.movieObj.id);
    } else {
      this.localStorageService.removeMovieFtomList(this.movieObj.id);
    }
  }

  open() {
    const modalRef = this.modalService.open(MovieModalComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.movie = this.movieObj;
  }

  onRatingClick(event) {
    event.stopPropagation();
  }
}
