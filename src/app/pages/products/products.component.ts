import {Component, inject} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {AsyncPipe} from "@angular/common";

import {RouterLink} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  productsService = inject(ProductsService)
  public products$ = this.productsService.products$.pipe(
    tap(p => console.log(p))
  )
}
