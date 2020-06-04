import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageProductsFacade } from '@dekao/catalog/domain';
import { take } from 'rxjs/operators';

@Component({
  selector: 'catalog-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  @Input() minRows = 2;
  @Input() maxRows = 20;

  productCategoryList$ = this._manageProducts.productCategoryList$;

  form: FormGroup;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  constructor(
    private _ngZone: NgZone,
    private builder: FormBuilder,
    private _manageProducts: ManageProductsFacade
  ) {
    this.form = this.builder.group({
      id: [],
      name: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.maxLength(1000)
      ]],
      price: ['', [
        Validators.required,
        Validators.min(1),
        // Validators.pattern('[0-9|,?|.?]*')
      ]],
      productCategoryId: []
    });
  }

  formatCurrency(input: HTMLInputElement) {
    const intl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const value = input.value.replace(/\D|0/g, '');
    console.log(value);

    input.value = intl.format(
      +value
    );


  }



  ngOnInit() {
    this.load();
  }

  load(): void {
    this._manageProducts.load();
  }

  onSubmit() {
    console.log(this.form.value);

  }

}

