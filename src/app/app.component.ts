import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { PeopleSearchComponent } from '../search/search.component';
import { PeopleService } from '../services/people.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives : [ PeopleSearchComponent ],
  providers : [ PeopleService, HTTP_PROVIDERS ]
})
export class AppComponent { }
