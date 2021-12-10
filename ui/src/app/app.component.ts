import { Component } from '@angular/core';
import {
  faGithub,
  faDiscord,
  faTwitter,
  faDiscourse,
  faEthereum,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faGithub = faGithub;
  faDiscord = faDiscord;
  faTwitter = faTwitter;
  faDiscourse = faDiscourse;
  faEthereum = faEthereum;
}
