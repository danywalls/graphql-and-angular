import {Component, inject} from '@angular/core';
import {Product} from "../../services/products.service";
import {AsyncPipe} from "@angular/common";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {map, tap} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private readonly apollo = inject(Apollo)

  public products$ = this.apollo.watchQuery<{ products: Product[] }>(
    {
      query: gql`
        {
          products {
            id,
            price
            image
            title
          }
        }

      `
    }
  ).valueChanges
    .pipe(
      tap(p => console.log(p)),
      map(result => result.data.products)
    )
}
