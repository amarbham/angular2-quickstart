import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent {
  questions: any;

  post = {
    title: "Title",
    isFavourite: true,
    voteCount: 10,
    myVote: 0
  }

  onFavouriteChange($event) {
    console.log($event)
  }

  logEvent($event) {
    console.log('event', $event)
  }

  constructor(){}
}
