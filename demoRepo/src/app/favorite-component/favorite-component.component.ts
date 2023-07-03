import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.css']
})
export class FavoriteComponentComponent implements OnInit {
  isFavorite: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  favorite() {
    this.isFavorite = !this.isFavorite;
  }
}

