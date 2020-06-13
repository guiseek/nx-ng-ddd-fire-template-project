import { Component, OnInit} from '@angular/core';
import { ShellFacade } from '@seek/catalog/domain';

@Component({
  selector: 'catalog-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
    
    
    productList$ = this.shellFacade.productList$;


    constructor(private shellFacade: ShellFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.shellFacade.load();
    }

}

