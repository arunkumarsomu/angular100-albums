import { Component, OnInit } from "@angular/core";

import { Album } from "./albums/album.model";

// import ALBUMS from "./data/music-info.json";
// import { ALBUMS } from "./albums/albums.data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "My Angular Albums";
  // albumsArray: Album[];
  albumsArray: any;

  ngOnInit(): void {
    this.albumsArray = [
      {
        id: "1",
        artist: "Tremonti",
        album_name: "Dust",
        on_sale: "true",
        price: 11.99,
        currency: "USD",
        year: 2016,
        release_date: "April 29, 2016",
        "recording-location": "Studio Barbarosa, Orlando, FL",
        genre: "Pop/Rock",
        duration: "43:18:00",
        URL: "https://www.allmusic.com/album/dust-mw0002918360"
      },
      {
        id: 2,
        artist: "Bon Jovi",
        album_name: "7800 Fahrerenheit",
        on_sale: false,
        price: 7,
        year: 1985,
        release_date: "April 20, 1985",
        "recording-location": "Warehouse, Philadelphia, PA",
        genre: "Pop/Rock",
        duration: "47:15:00",
        URL: "https://www.allmusic.com/album/7800%C2%B0-fahrenheit-mw0000189199"
      },
      {
        id: 3,
        artist: "The Beatles",
        album_name: "The White Album",
        on_sale: true,
        price: 12,
        year: 1968,
        release_date: "November 22, 1968",
        "recording-location": "",
        genre: "Pop/Rock",
        duration: "1:33:43",
        URL:
          "https://www.allmusic.com/album/the-beatles-white-album-mw0000418113"
      }
    ];

    console.log(JSON.stringify(this.albumsArray, null, 4));
  }
}
