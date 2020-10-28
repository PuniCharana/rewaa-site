import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { productComponents } from '../product.routes';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
    ) {
    this.productForm = formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      thumbnail: [null, Validators.required],
      brand: [null, Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createProduct() {
    this.productService.addProduct(this.productForm.getRawValue()).subscribe((result) => {
      console.log(result);
      this.router.navigateByUrl('/products')
    })
  }

}
