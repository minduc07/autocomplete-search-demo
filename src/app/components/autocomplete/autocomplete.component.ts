import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { delay } from 'rxjs/operators/delay';
import { switchMap } from 'rxjs/operators/switchMap';
import { startWith } from 'rxjs/operators/startWith';
import {
  TsAutocompleteComponent,
  TsAutocompleteComparatorFn,
} from '@terminus/ui';


/**
 * Define an interface that represents the options we present to the user
 */
interface OptionType {
  id: string;
  login: string;
  [key: string]: any;
}


@Component({
  selector: 'demo-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements OnInit {
  @Input()
  public options$: Observable<any[]>;

  @Output()
  public term: EventEmitter<any> = new EventEmitter();

  // Using ViewChild to get a reference, we can pass in an interface for our autocomplete options
  @ViewChild('auto')
  public auto: TsAutocompleteComponent<OptionType>;
  
  myForm = this.formBuilder.group({
    selections: [
      null,
      [
        Validators.required,
      ],
    ],
  });
  changesSubscription$: Observable<any>;
  users$: any;


  ngOnInit() {
    this.changesSubscription$ = this.auto.selection.subscribe((v: any) => {
      console.log('DEMO: subscription change ', v);
    });

    this.auto.query.subscribe((v: any) => {
      console.log('auto subscribe: ', v);
      this.term.emit(v);
    });
  }


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}


  comparator: TsAutocompleteComparatorFn = (v: any) => v.id;

  displayFn(user?: any): string | undefined {
    return user ? user.login : undefined;
  }

  added(selection: OptionType): void {
    console.log('DEMO: selection added', selection);
  }

  removed(selection: OptionType): void {
    console.log('DEMO: selection removed', selection);
  }

  selection(selections: OptionType[]): void {
    console.log('DEMO: selections changed', selections);
  }

  log(formValue: {selections: OptionType[]}): void {
    console.log('Demo: form submit: ', formValue);
  }

}
