import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() title: string; // Name of the category in the card
  @Input() imageUrl: string // Url of the image inside de card
  
  constructor() { }
  

  ngOnInit(): void {
  }

}
