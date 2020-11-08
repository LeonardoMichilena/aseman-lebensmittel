import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  categories = ["Dates","Rice","Tea & Coffee","Drie fruits & Nuts","Pickels","Jam","Lawashak","Ready Meals","Distillates & Syrups","Spices & Herbs","Pastry & Sweets","Pulses","Dairy Products","Other Products"];

  ngOnInit(): void {
  }

}
