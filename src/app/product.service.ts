import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable()
export class ProductService {
  private _albumUrl:string='assets/album.json';

  constructor(private _http:HttpClient) { }
  getAlbum(id:number){

      return this._http.get(this._albumUrl).map((response:Response) => {
         response.json()
      });
  }

}
