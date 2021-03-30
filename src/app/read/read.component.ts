import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Tutorial} from '../_model/tutorial.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../app.state';
import * as TutorialActions from '../_actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.tutorials = this.store.select('tutorial');
  }

  removeTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
