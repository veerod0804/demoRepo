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
email = "email@email.com";
course = {
  title: "The Complete Angular Course",
  rating: 4.9745,
  students: 30123,
  price: 190.95,
  releaseDate: new Date(2016, 3, 1)
}
text = "lorem ipsum a blah blah blah"


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

  onKeyUp() {
  console.log(this.email);  
  }
}
