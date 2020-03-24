import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-movie-modal",
  templateUrl: "./movie-modal.component.html",
  styleUrls: ["./movie-modal.component.scss"]
})
export class MovieModalComponent implements OnInit {
  @Input() movie: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
