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
  selectall: boolean = false;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts({}).subscribe((products) => {
      this.initProducts(products);
    })
  }

  initProducts(products) {
    this.products = [];
    products.map(product => { product.selected = false });
    this.products = products;
  }

  viewProduct(id) {
    this.router.navigateByUrl('products/' + id);
  }

  deleteProduct() {
    var ids = [];
    this.products.map((product) => {
      if (product.selected) {
        ids.push(product.id);
      }
    });

    if (ids.length) {
      var response = confirm(`Are you sure you want to delete product id = ${ids}`);
      if (response == true) {
        this.productService.deleteProduct(ids).subscribe((response) => {
          this.getProducts();
        }, (error) => {
          console.log(error)
        })
      }
    } else {
      alert("Nothing to delete!");
    }
  }

  selectProduct(index, id, selected) {
    this.products[index].selected = !selected;
    if (this.products.filter((product) => product.selected).length >= this.products.length) {
      this.selectall = true
    } else {
      this.selectall = false
    }
  }

  selectAll() {
    this.selectall = !this.selectall;
    this.products.map(product => { product.selected = this.selectall });
  }

  createProduct() {
    this.router.navigateByUrl('/products/create');
  }

}
