import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product, ProductCategory } from '@dekao/catalog/domain';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, take, takeUntil } from 'rxjs/operators';

export const createProductObject = ({
  price, ...product
}: Partial<Product>): Product => {
  return { price: price, ...product } as Product;
}

@Component({
  selector: 'catalog-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  destroy: Subject<void> = new Subject();
  minRows = 2;
  maxRows = 20;

  @Input()
  categoryList: ProductCategory[] = [];

  @Input() set product(v: Product) {
    this.form.setValue(
      {
        id: v.id,
        name: v.name,
        description: v.description,
        price: v.price,
        productCategoryId: v.productCategoryId,
      },
      { emitEvent: false }
    )
  }

  @Output()
  valueChange = new EventEmitter<Partial<Product>>();

  @Output()
  valueSubmitted = new EventEmitter<Product>();

  times: Array<Date> = [];

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl(),
    price: new FormControl('', [
      Validators.required,
      Validators.min(1),
      // Validators.pattern('[0-9|,?|.?]*')
    ]),
    productCategoryId: new FormControl(),
    timestamp: new FormControl()
  });

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  constructor(
    private _ngZone: NgZone,
  ) {
    const date = new Date();
    this.times = Array.from({ length: 24 })
      .map((v, i) => new Date(date.setHours(i, 0, 0)));
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe(value =>
      this.valueChange.emit(createProductObject(value))
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.valueSubmitted.emit(createProductObject(this.form.value));
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
