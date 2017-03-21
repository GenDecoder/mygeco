import { Component } from '@angular/core';

@Component({
  selector: 'mygeco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contact: Object = {
    name: '',
    email: '',
    message: ''
  };
  showModal: Boolean = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}