import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }
  getAlbum(id: number): Observable<Album> {
              return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

}
