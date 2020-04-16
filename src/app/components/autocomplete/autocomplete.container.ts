import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';


// Values used to seed initial selections
const INITIAL = [
  {
    login: 'benjamincharity',
    id: 270193,
    avatar_url: 'https://avatars3.githubusercontent.com/u/270193?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/benjamincharity',
    html_url: 'https://github.com/benjamincharity',
    followers_url: 'https://api.github.com/users/benjamincharity/followers',
    following_url: 'https://api.github.com/users/benjamincharity/following{/other_user}',
    gists_url: 'https://api.github.com/users/benjamincharity/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/benjamincharity/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/benjamincharity/subscriptions',
    organizations_url: 'https://api.github.com/users/benjamincharity/orgs',
    repos_url: 'https://api.github.com/users/benjamincharity/repos',
    events_url: 'https://api.github.com/users/benjamincharity/events{/privacy}',
    received_events_url: 'https://api.github.com/users/benjamincharity/received_events',
    type: 'User',
    site_admin: false,
    score: 82.52784,
  },
  {
    login: 'jnystrom',
    id: 1293142,
    avatar_url: 'https://avatars0.githubusercontent.com/u/1293142?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/jnystrom',
    html_url: 'https://github.com/jnystrom',
    followers_url: 'https://api.github.com/users/jnystrom/followers',
    following_url: 'https://api.github.com/users/jnystrom/following{/other_user}',
    gists_url: 'https://api.github.com/users/jnystrom/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/jnystrom/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/jnystrom/subscriptions',
    organizations_url: 'https://api.github.com/users/jnystrom/orgs',
    repos_url: 'https://api.github.com/users/jnystrom/repos',
    events_url: 'https://api.github.com/users/jnystrom/events{/privacy}',
    received_events_url: 'https://api.github.com/users/jnystrom/received_events',
    type: 'User',
    site_admin: false,
    score: 27.880474,
  },
];


@Component({
  selector: 'demo-autocomplete-container',
  template: `
    <demo-autocomplete
      [options$]="options$"
      (term)="search($event)"
    ></demo-autocomplete>
  `,
})
export class AutocompleteContainerComponent implements OnInit {
  options$ = new BehaviorSubject([]);
  changesSubscription$: Observable<any>;
  users$ = of([]);


  ngOnInit() {
    /*
     *this.options$.subscribe((v: any) => {
     *  console.log('===Container options subscribe: ', v);
     *});
     */
  }


  search(term: any) {
    if (!term) {
      return;
    }
    console.warn('in search: ', term);
    this.options$.next(INITIAL.slice());
  }
}
