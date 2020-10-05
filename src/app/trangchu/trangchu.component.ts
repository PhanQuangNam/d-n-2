import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ServicesService } from '../service.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  products: Product[];
  products1: Product[];
  products2: Product[];
  searchText;
  p : Number=1;
  constructor(
    private Services : ServicesService
  ) { }
 
    ngOnInit(): void {
     this.getProducts();
     this.getProductskhuyenmai();
     this.getProductsbanchay()
   }
   getProducts(){
    this.Services.getProducts().subscribe(Response=> this.products = Response,error => console.log(error))
   }

   getProductskhuyenmai(){
    this.Services.getProductskhuyenmai().subscribe(Response=> this.products1 = Response,error => console.log(error))
   }

   getProductsbanchay(){
    this.Services.getProductsbanchay().subscribe(Response=> this.products2 = Response,error => console.log(error))

   }
  
 
 }