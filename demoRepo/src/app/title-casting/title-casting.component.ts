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

}
