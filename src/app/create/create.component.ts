import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Tutorial} from '../_model/tutorial.model';
import * as TutorialActions from '../_actions/tutorial.actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../app.state';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name, url}));
  }
}
