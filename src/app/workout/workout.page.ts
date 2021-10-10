import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  cardioclick() {
    this.route.navigate(['/cardio']);
  }

}
