import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
//   styles: [
//     `
//     .btn {
//     color: green;
// }
//     `
//   ],
  // styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean = true;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}

