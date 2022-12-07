import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList!: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

   listProducts(){
     this.productService.getProductList().subscribe(
       data => {this.productList = data;}
     )
  }

}
