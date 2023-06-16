import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
title = "List of courses";
courses;
isActive = true;


  constructor(service: CoursesService) {
    this.courses = service.getCourses();
   }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  onSave($event: { stopPropagation: () => void; }) {
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }

  onDivClicked() {
    console.log("div was clicked");
  }
}
