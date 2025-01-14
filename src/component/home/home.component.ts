import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('carousel') carousel: ElementRef | undefined;

  // Lectures Data
  lectures = [
    {
      title: 'Classroom Management Techniques',
      thumbnail: 'assets/pictures/lecture1.png',
      link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
    },
    {
      title: 'Effective Teaching Strategies',
      thumbnail: 'assets/pictures/lecture2.png',
      link: 'https://www.youtube.com/watch?v=lecture2'
    },
    {
      title: 'Incorporating Technology in Education',
      thumbnail: 'assets/pictures/lecture3.png',
      link: 'https://www.youtube.com/watch?v=lecture3'
    },
    {
      title: 'Incorporating Technology in Education',
      thumbnail: 'assets/pictures/lecture4.png',
      link: 'https://www.youtube.com/watch?v=lecture3'
    },
    {
      title: 'Incorporating Technology in Education',
      thumbnail: 'assets/pictures/lecture5.png',
      link: 'https://www.youtube.com/watch?v=lecture3'
    }
  ];

  // Branches Data
  branches = [
    { name: 'Downtown Branch', address: '123 Main St, City Center' },
    { name: 'Uptown Branch', address: '456 Elm St, Uptown' },
    { name: 'Westside Branch', address: '789 Oak St, Westside' }
  ];


  allLectures = [
    [
      {
        title: 'Classroom Management Techniques',
        thumbnail: 'assets/pictures/lecture1.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
      {
        title: 'Effective Teaching Strategies',
        thumbnail: 'assets/pictures/lecture2.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
      {
        title: 'Incorporating Technology in Education',
        thumbnail: 'assets/pictures/lecture3.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
      {
        title: 'Engaging Students Through Gamification',
        thumbnail: 'assets/pictures/lecture4.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
    ],
    [
      {
        title: 'Time Management for Educators',
        thumbnail: 'assets/pictures/lecture5.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
      {
        title: 'Boosting Student Motivation',
        thumbnail: 'assets/pictures/lecture6.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
      {
        title: 'Innovation in the Modern Classroom',
        thumbnail: 'assets/pictures/lecture7.png',
        link: 'https://www.youtube.com/watch?v=fcGTSuxDZ6g'
      },
    ]
  ];

  currentIndex = 0; // Tracks the current batch of lectures displayed

  // Scroll and update lectures
  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateLectures();
    }
  }

  scrollRight() {
    if (this.currentIndex < this.allLectures.length - 1) {
      this.currentIndex++;
      this.updateLectures();
    }
  }

  updateLectures() {
    this.lectures = this.allLectures[this.currentIndex];
  }
}


