import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-payment',
  standalone: true,
  imports: [MatButtonModule,MatDividerModule],
  templateUrl: './product-payment.component.html',
  styleUrl: './product-payment.component.css'
})
export class ProductPaymentComponent {
  productId: string | undefined | null;
  product: Product | undefined;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      
      if (this.productId) {
        this.product = this.productService.getProductById(this.productId);
        if(this.product == null){
          console.error('Product ID not found');
        }
      } else {
        console.error('Product ID not found');
      }
      
    });

  }
}
