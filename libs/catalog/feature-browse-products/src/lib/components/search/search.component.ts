import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'catalog-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject();
  public control = new FormControl();

  @Output() queryChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      takeUntil(this.destroy),
      debounceTime(600)
    ).subscribe(query => {
      this.queryChange.emit(query);
    })
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
