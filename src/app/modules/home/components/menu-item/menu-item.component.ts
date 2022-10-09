import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Recipe } from 'src/app/models/recipe';
import { faClock, faHeart, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  imports: [CommonModule, FontAwesomeModule],
})
export class MenuItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  faClock = faClock;
  faHeart = faHeart;
  faLeaf = faLeaf;

  constructor() {}

  ngOnInit(): void {}
}
