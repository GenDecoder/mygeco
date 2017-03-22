import { Component } from '@angular/core';
import { Hero, heroes } from './test-form/test';

@Component({
  selector: 'mygeco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedHero: Hero;
  heroes: Hero[] = heroes;
  
  showModal: Boolean = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}