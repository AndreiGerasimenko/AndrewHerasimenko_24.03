import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../types/movie";

@Injectable({
  providedIn: "root"
})
export class GetMoviesService {
  constructor(private http: HttpClient) {}

  getFullMovieList() {
    return this.http.get<Movie[]>(
      "http://my-json-server.typicode.com/moviedb-tech/movies/list"
    );
  }

  getMovieById(id: number) {
    return this.http.get(
      `http://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`
    );
  }
}
