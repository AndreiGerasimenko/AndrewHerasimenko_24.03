import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-movies-gallery",
  templateUrl: "./movies-gallery.component.html",
  styleUrls: ["./movies-gallery.component.scss"]
})
export class MoviesGalleryComponent implements OnInit, OnChanges {
  @Input() movieList: any[];
  genresArray: string[] = [];
  filteredMovies: any[];
  selectControl: FormControl;
  viewMode: string = "grid";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectControl = this.fb.control("def");
    this.selectControl.valueChanges.subscribe(data => {
      this.filteredMovies = this.filterMovieArray();
      console.log(this.filteredMovies);
      console.log(data);
    });
  }

  ngOnChanges() {
    console.log(this.movieList);
    this.genresArray = this.getGenresArray();
    this.filteredMovies = this.filterMovieArray();
  }

  getGenresArray() {
    let tempArray = [];
    this.movieList.forEach(item => {
      tempArray.push(...item.genres);
    });

    return tempArray.reduce((prevValue, item) => {
      if (!prevValue.includes(item.toLowerCase()))
        prevValue.push(item.toLowerCase());
      return prevValue;
    }, []);
  }

  filterMovieArray() {
    if (
      this.selectControl &&
      (this.selectControl.value === "def" || this.selectControl.value === "all")
    ) {
      return [...this.movieList];
    } else {
      return [
        ...this.movieList.filter(item => {
          for (let i = 0; i < item.genres.length; i++) {
            if (
              item.genres[i].toLowerCase() ===
              this.selectControl.value.toLowerCase()
            )
              return true;
          }
          return false;
        })
      ];
    }
  }
}
