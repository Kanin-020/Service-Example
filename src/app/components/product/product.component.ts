import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId: number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  getUserData() {

    this.productService.getProductById(this.productId)
      .then((data) => {

        const dataValue: string = JSON.stringify(data);

        const dataLabel = document.getElementById('data');

        if (dataLabel) {
          dataLabel.innerHTML = dataValue;

        }else{
          console.error("Data label not found");
        }



      })
      .catch((error) => {
        console.error('Error at query', error);
      });

  }


}
