import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products = [
    {
      id: '1',
      name: 'black erase markers',
      price: 50,
      thumbnail: 'assets/products_pictures/black eraser markers.webp',
    },
    {
      id: '2',
      name: 'black teacher planner',
      price: 20,
      thumbnail: 'assets/products_pictures/black teacher planner.webp',
    },
    {
      id: '3',
      name: 'board markers package',
      price: 45,
      thumbnail: 'assets/products_pictures/board markers package .webp',
    },
    {
      id: '4',
      name: 'border eraser',
      price: 15,
      thumbnail: 'assets/products_pictures/border eraser.webp',
    },
    {
      id: '5',
      name: 'colorful 14 pens',
      price: 60,
      thumbnail: 'assets/products_pictures/colorful 14 pens.webp',
    },
    {
      id: '6',
      name: 'colorful pens',
      price: 35,
      thumbnail: 'assets/products_pictures/colorful pens.webp',
    },
    {
      id: '7',
      name: 'erase board',
      price: 40,
      thumbnail: 'assets/products_pictures/erase board.webp',
    },
    {
      id: '8',
      name: 'eraser markers and board eraser',
      price: 55,
      thumbnail: 'assets/products_pictures/eraser markers and bord eraser.webp',
    },
    {
      id: '9',
      name: 'green teacher planner',
      price: 25,
      thumbnail: 'assets/products_pictures/green teacher planner.webp',
    },
    {
      id: '10',
      name: 'memo pages',
      price: 10,
      thumbnail: 'assets/products_pictures/Memo pages.webp',
    },
    {
      id: '11',
      name: 'pastel pens',
      price: 30,
      thumbnail: 'assets/products_pictures/pastel pens.webp',
    },
    {
      id: '12',
      name: 'pink notebook',
      price: 15,
      thumbnail: 'assets/products_pictures/pink notebook.webp',
    },
    {
      id: '13',
      name: 'small notebooks',
      price: 20,
      thumbnail: 'assets/products_pictures/small notebooks.webp',
    }
  ]

  getProducts(){
    return this.products;
  }

  getProductById(id:string){
    return this.products.find(p => p.id === id);
  }
}
