import { Component } from '@angular/core';
import { ContentService } from './services/content.service';
import { LogUpdateService } from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-project';
  constructor(private logService: LogUpdateService) {}
}
