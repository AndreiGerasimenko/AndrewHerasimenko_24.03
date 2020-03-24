import { Component, OnInit } from "@angular/core";
import { GetMoviesService } from "../services/get-movies.service";
import { LocalStorageService } from "../services/local-storage.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RegiterEditComponent } from "../regiter-edit/regiter-edit.component";

@Component({
  selector: "app-main-gallary-app",
  templateUrl: "./main-gallary-app.component.html",
  styleUrls: ["./main-gallary-app.component.scss"]
})
export class MainGallaryAppComponent implements OnInit {
  fullMovieList: any[] = [];
  name: string = "Unregistered";
  email: string = "";
  constructor(
    private getFilmSeevice: GetMoviesService,
    private localStorageService: LocalStorageService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getFilmSeevice.getFullMovieList().subscribe((data: any[]) => {
      this.fullMovieList = [
        ...data.map(item => {
          item.favorite = false;
          return item;
        })
      ];
      this.loadFavoriteList();
      this.loadLoginInfo();
    });
  }

  get favouriteList() {
    return this.fullMovieList
      .filter(item => {
        return item.favorite;
      })
      .map(item => {
        return { id: item.id, name: item.name };
      });
  }

  OnDeleteFromList(id) {
    let index = this.fullMovieList.findIndex(item => {
      return item.id === id;
    });

    this.fullMovieList[index].favorite = false;
    this.localStorageService.removeMovieFtomList(id);
  }

  loadFavoriteList() {
    let list = this.localStorageService.getFavoriteList()
      ? this.localStorageService.getFavoriteList()
      : [];

    list.forEach(item => {
      let index = this.fullMovieList.findIndex(data => {
        return data.id === item;
      });

      if (~index) {
        this.fullMovieList[index].favorite = true;
      }
    });
  }

  open(str: string) {
    const modalRef = this.modalService.open(RegiterEditComponent, {
      centered: true
    });

    modalRef.result.then(data => {
      if (data.name) {
        this.localStorageService.setLogin(data);
        this.name = data.name;
        this.email = data.email;
      }
    });
    if (str === "edit") {
      modalRef.componentInstance.logInfo = this.localStorageService.getLogin();
    }
  }

  loadLoginInfo() {
    let info = this.localStorageService.getLogin();
    if (info) {
      this.email = info.email;
      this.name = info.name;
    }
  }
}
