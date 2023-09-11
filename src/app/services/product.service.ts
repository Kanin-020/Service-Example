import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  getProductById(userId: number): Promise<any> {


    const url = `${this.apiUrl}/${userId}`;

    console.log(url);


    return this.http.get(url).toPromise();
  }

}
