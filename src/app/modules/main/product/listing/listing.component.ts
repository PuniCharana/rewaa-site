import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts({}).subscribe((products) => {
      this.products = products;
    })
  }

  viewProduct(id) {
    this.router.navigateByUrl('products/' + id);
  }

  deleteProduct(event, index, id) {
    event.stopPropagation();
    var response = confirm(`Are you sure you want to delete product id = ${id}`);
    if (response == true) {
      this.productService.deleteProduct(id).subscribe((response)=> {
        this.products.splice(index, 1);
      });
    }
  }

  selectProduct(event, id) {
    event.stopPropagation();
  }

}
