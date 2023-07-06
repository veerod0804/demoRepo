import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-casting',
  templateUrl: './title-casting.component.html',
  styleUrls: ['./title-casting.component.css']
})
export class TitleCastingComponent implements OnInit {
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

  transform(title: string): unknown {
    let prepositions = ["of", "the"];
    let words = title.split(' ');

    if (!title) {
    return null;
    }

    for(let i = 0; i < words.length; i++){
      if (prepositions.includes(words[i])){
        words[i] == words[i].toLowerCase();
      }
      else {
       words[i]= words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
      }
    }
    return console.log(words.join(' '));
  }
}
