import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  categoriesList = [
    {name: "Dates", imgName: "spices.jpg"},
    {name: "Rice", imgName:"spices2.jpg"},
    {name: "Tea & Coffee", imgName:"spices.jpg"},
    {name: "Dried fruits & Nuts", imgName:"spices2.jpg"},
    {name: "Pickels", imgName:"spices.jpg"},
    {name: "Jam", imgName:"spices.jpg"},
    {name: "Lawashak", imgName:"spices2.jpg"},
    {name: "Ready Meals", imgName:"spices.jpg"},
    {name: "Distillates & Syrups", imgName:"spices2.jpg"},
    {name: "Spices & Herbs", imgName:"spices.jpg"},
    {name: "Pastry & Sweets", imgName:"spices2.jpg"},
    {name: "Pulses", imgName:"spices.jpg"},
    {name: "Dairy Products", imgName:"spices2.jpg"},
    {name: "Other Products", imgName:"spices.jpg"}
  ];


  
  ngOnInit(): void {
  }

}
