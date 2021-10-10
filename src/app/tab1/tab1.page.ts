import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router) {}
  stresspage() {
    this.route.navigate(['/stress']);
  }
  fuelpage() {
    this.route.navigate(['/fuel']);
  }
  workoutpage() {
    this.route.navigate(['/workout']);
  }
  motivationpage() {
    this.route.navigate(['/motivation']);
  }
  

}

