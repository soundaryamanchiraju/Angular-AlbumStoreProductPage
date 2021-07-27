import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import 'rxjs/add/operator/Map';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
albumInfo;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe((res)=>{this.albumInfo = res} );

  }

}
