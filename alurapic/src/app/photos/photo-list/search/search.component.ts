import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  ngOnInit(): void {
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(value => this.onTyping.emit(value));
  }
  ngOnDestroy(): void {
      this.debounce.unsubscribe();
  }
  onKeyUp(event: any){
    this.debounce.next(event.target.value);
  }

}
