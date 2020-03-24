import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  private localStorage = window.localStorage;

  constructor() {}

  saveFavoriteList(list: number[]) {
    this.localStorage.setItem("favoriteList", JSON.stringify(list));
  }

  getFavoriteList() {
    let arr = this.localStorage.getItem("favoriteList");
    if (arr) {
      return JSON.parse(arr);
    }
    return null;
  }

  addMovieToSist(id: number) {
    let tempArr = this.getFavoriteList() ? this.getFavoriteList() : [];
    if (!tempArr.includes(id)) tempArr.push(id);
    this.saveFavoriteList(tempArr);
  }

  removeMovieFtomList(id) {
    let tempArr = this.getFavoriteList() ? this.getFavoriteList() : [];
    let index = tempArr.findIndex(item => {
      return item === id;
    });
    if (~index) {
      tempArr.splice(index, 1);
    }
    this.saveFavoriteList(tempArr);
  }

  setLogin(obj: any) {
    this.localStorage.setItem("loginInfo", JSON.stringify(obj));
  }

  getLogin() {
    let arr = this.localStorage.getItem("loginInfo");
    if (arr) {
      return JSON.parse(arr);
    }
    return null;
  }
}
